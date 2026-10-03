import { test } from 'node:test';
import assert from 'node:assert/strict';

import { createCounter } from '../public/core.js';
test('first value is zero and the inclusive limit is emitted', () => { const c=createCounter({limit:2}); assert.deepEqual([c(),c(),c(),c()],[0,1,2,0]); });
test('interleaved instances own independent state', () => { const a=createCounter(),b=createCounter(); assert.deepEqual([a(),a(),b(),a(),b()],[0,1,0,2,1]); });
test('callback is called once with exactly the returned value', () => { const calls=[]; const c=createCounter({onCount:(...args)=>calls.push(args)}); const values=[c(),c(),c()]; assert.deepEqual(calls,values.map(v=>[v])); });
test('zero limit always emits zero', () => { const c=createCounter({limit:0}); assert.deepEqual([c(),c(),c()],[0,0,0]); });
test('invalid limits and callbacks fail at construction', () => { for(const limit of [-1,1.5,NaN,Infinity,'2']) assert.throws(()=>createCounter({limit})); assert.throws(()=>createCounter({onCount:null})); });
test('state advances even if an observer throws', () => { let shouldThrow=true; const c=createCounter({onCount:()=>{if(shouldThrow)throw Error('observer failed');}}); assert.throws(()=>c(),/observer failed/); shouldThrow=false; assert.equal(c(),1); });
test('one bounded reentrant observer sees the next value', () => { const seen=[]; let c; c=createCounter({onCount:value=>{seen.push(value);if(value===0)c();}}); assert.equal(c(),0); assert.deepEqual(seen,[0,1]); assert.equal(c(),2); });
