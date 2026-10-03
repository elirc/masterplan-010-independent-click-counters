# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a third station

**Hint 1 — ownership:** Begin from `createCounter`. Create a third counter instance and UI controls without sharing the first two instances.

**Hint 2 — reasoning:** Revisit the decision “Create state inside the factory”. Ask yourself: Draw two separate boxes for A’s and B’s next values.

**Answer direction:** A defensible solution demonstrates this observable result: Interleaved calls show three independent zero-first sequences. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Make the limit configurable

**Hint 1 — ownership:** Begin from `createCounter`. Let the user create new counters with a chosen nonnegative integer limit.

**Hint 2 — reasoning:** Revisit the decision “Capture emitted before advancing”. Ask yourself: Explain what a pre-increment return would change about the first call.

**Answer direction:** A defensible solution demonstrates this observable result: Invalid limits leave the currently working counters intact or produce another explicitly documented behavior. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Reset one station only

**Hint 1 — ownership:** Begin from `createCounter`. Recreate one closure and decide whether its old log entries remain.

**Hint 2 — reasoning:** Revisit the decision “Advance before the callback”. Ask yourself: Explain why this policy does not make unbounded recursive callbacks safe.

**Answer direction:** A defensible solution demonstrates this observable result: The other station’s next value is unchanged. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Add a wrap notification

**Hint 1 — ownership:** Begin from `createCounter`. Extend the observer contract with an explicit wrap event or metadata.

**Hint 2 — reasoning:** Revisit the decision “Create state inside the factory”. Ask yourself: Draw two separate boxes for A’s and B’s next values.

**Answer direction:** A defensible solution demonstrates this observable result: The normal count value still agrees with the function’s return and the limit remains included. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Show call counts separately

**Hint 1 — ownership:** Begin from `createCounter`. Track how many times each station has been invoked as UI-owned information.

**Hint 2 — reasoning:** Revisit the decision “Capture emitted before advancing”. Ask yourself: Explain what a pre-increment return would change about the first call.

**Answer direction:** A defensible solution demonstrates this observable result: Invocation count does not wrap merely because the emitted counter value wraps. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Explain callback failure behavior

**Hint 1 — ownership:** Begin from `createCounter`. Write a small standalone experiment where the observer throws once.

**Hint 2 — reasoning:** Revisit the decision “Advance before the callback”. Ask yourself: Explain why this policy does not make unbounded recursive callbacks safe.

**Answer direction:** A defensible solution demonstrates this observable result: Record the thrown error and next successful value, and explain why the state advanced. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Create A: nextA=0; create B: nextB=0 → A returns 0 and advances A to 1 → A returns 1 → B returns 0 → A returns 2. The function bodies match, but their lexical state does not.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
