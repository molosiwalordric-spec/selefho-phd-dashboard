// Run with node verify-manual.cjs. No dependencies.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const path = require('node:path');
const bundle = JSON.parse(fs.readFileSync(path.join(__dirname, 'manual-indicators.json'), 'utf8'));
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
assert.equal(bundle.indicators.length, 31);
assert.equal(bundle.indicators.filter(r => r.group === 'NMES').length, 8);
assert.equal(bundle.indicators.filter(r => r.group === 'OPI').length, 23);
assert.equal(bundle.index.questions.length, 12);
assert.equal(new Set(bundle.indicators.map(r => r.id)).size, 31);
for (const r of bundle.indicators) {
  assert.equal(r.actual, null);
  assert.equal(r.current_target, null);
  assert.equal(r.geography, null);
  assert.equal(r.latitude, null);
  assert.equal(r.longitude, null);
  assert.equal(r.pdf_page, r.printed_page + 13);
  assert.equal(r.target_period, r.manual_target === null ? null : 'FY22/23');
}
assert.deepEqual(bundle.indicators.filter(r => r.group === 'NMES').map(r => r.manual_target), [75,100,4,80,50,50,75,50]);
assert.ok(bundle.indicators.find(r => r.id === 'NMES-07').measurement.includes('AND'));
assert.ok(bundle.index.questions.every(q => q.response === null && q.evidence === null));
const embedded = html.match(/const source=(\{.*?\});\s*const catalog=/s);
assert.ok(embedded);
assert.deepEqual(JSON.parse(embedded[1]), bundle);
const rateCode = html.match(/function rate\(.*?\}\r?\n/s)[0];
const rate = vm.runInNewContext('(' + rateCode + ')');
assert.equal(rate(100,100,'higher',true), 'green');
assert.equal(rate(120,100,'higher',true), 'green');
assert.equal(rate(99.9,100,'higher',true), 'yellow');
assert.equal(rate(50,100,'higher',true), 'yellow');
assert.equal(rate(49.9,100,'higher',true), 'red');
assert.equal(rate(0,100,'higher',true), 'red');
for (const args of [[null,100,'higher',true],[50,null,'higher',true],[50,0,'higher',true],[50,100,'lower',true],[50,100,'unspecified',true],[50,100,'higher',false],[NaN,100,'higher',true],[-1,100,'higher',true]]) assert.equal(rate(...args), 'unassessed');
assert.ok(!html.includes('DEMO-ED01'));
assert.ok(!html.includes('L.circleMarker'));
console.log('PASS: catalog/source parity; 31 definitions; historical target isolation; 12 unknown index responses; no invented geography; rating boundaries and missing/direction guards.');

