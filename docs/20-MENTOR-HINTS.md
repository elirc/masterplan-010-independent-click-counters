# M010: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain closure through this project

A function together with access to its enclosing lexical state.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain observer callback through this project

A supplied function notified with an emitted value.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain reentrancy through this project

Calling the counter again before an earlier callback finishes.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain inclusive limit through this project

The limit itself is emitted before wrapping to zero.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: limit 2, four calls

0, 1, 2, 0

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: A, A, B, A, B

0, 1, 0, 2, 1

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: limit 0

0 on every call

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Draw two separate boxes for A’s and B’s next values.

The let next declaration runs for every createCounter call. The returned function retains access to that particular variable. Moving it to module scope would make all counters share one history.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Explain what a pre-increment return would change about the first call.

The current value is saved, the future state is computed, and the saved value is passed to the observer and returned. This order supports zero-first behavior and keeps callback and return values aligned.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Explain why this policy does not make unbounded recursive callbacks safe.

A callback is code supplied by another caller and can throw or call the counter again. Advancing first gives a bounded reentrant call the next value and avoids silently repeating a value after an observer failure. The UI’s callback only renders a log.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** How can two functions from the same factory remember different histories?

Each call to the factory creates a private next value. The returned function remembers that particular value after the factory finishes, so two counters need not share state. Advancing before notifying the callback is an intentional temporal rule: a callback that calls the counter again should observe the next value, not repeat the current one.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a pauseable UI station

**First hint:** The desired improvement is “Temporarily prevent clicks without replacing counter state.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Disable one station button; keep its closure; resume through the same function reference. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Pausing A does not reset A or affect B. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose pause wording and focus behavior. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add an observer log filter

**First hint:** The desired improvement is “Inspect one station without changing execution.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep the complete bounded event log; derive visible rows by station ID; retain sequence order. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Hiding B's rows does not stop B from advancing. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether counts reflect all or visible rows. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a limit-zero teaching fixture

**First hint:** The desired improvement is “Explain a valid degenerate counter.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Construct a counter with limit zero; trace repeated callbacks; compare invocation count with emitted value. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Every emission is zero while calls remain distinct events. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how to label the fixture. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Prove recursive callback ordering

**First hint:** The desired improvement is “Add a bounded reentrancy regression.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Let the observer call the counter once; record outer and nested results; prevent unbounded recursion in the fixture. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Nested notification sees the next value and both returns match their own emissions. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a small inclusive limit. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add an event sequence number

**First hint:** The desired improvement is “Separate log identity from the wrapping value.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Assign monotonically increasing UI event IDs; keep emitted counter values unchanged; render both. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Two emitted zeros have different event IDs after wrapping. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether numbering resets with the log. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a clear-log-only action

**First hint:** The desired improvement is “Distinguish display cleanup from counter reset.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Clear UI event rows; retain both closure references; label the action precisely. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The next click continues each counter's existing sequence. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether sequence numbers also clear. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a callback replacement comparison

**First hint:** The desired improvement is “Teach which dependencies a closure captures.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Build a scratch factory variant with explicit observer replacement; contrast it with recreating the whole counter; document state preservation. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The experiment distinguishes changing an observer from resetting next. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether replacement belongs in the public API. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a bounded burst action

**First hint:** The desired improvement is “Emit a small requested number of values.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Validate a small integer count; call the existing closure repeatedly; preserve ordinary notification order. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A burst across the limit emits the inclusive boundary then wraps. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a safe small burst cap. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Document independent reset semantics

**First hint:** The desired improvement is “Explain what creating a new closure replaces.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Draw old and new references; show which UI handler changes; verify the other station keeps its state. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The explanation does not claim reset mutates every closure made by the factory. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a concrete interleaved sequence. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
