# Build journal: Independent Click Counters

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

Two practice stations need counters that never share accidental state.

The main temptation was to make the project larger than its learning target. The useful boundary is **closures and callback contracts**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Each factory call owns a private next value. A new counter first emits zero, includes its limit before wrapping, notifies once with that emitted value and returns it. State advances before notification, including when an observer throws.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Create state inside the factory

The let next declaration runs for every createCounter call. The returned function retains access to that particular variable. Moving it to module scope would make all counters share one history.

**What a learner should challenge:** Draw two separate boxes for A’s and B’s next values.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Capture emitted before advancing

The current value is saved, the future state is computed, and the saved value is passed to the observer and returned. This order supports zero-first behavior and keeps callback and return values aligned.

**What a learner should challenge:** Explain what a pre-increment return would change about the first call.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Advance before the callback

A callback is code supplied by another caller and can throw or call the counter again. Advancing first gives a bounded reentrant call the next value and avoids silently repeating a value after an observer failure. The UI’s callback only renders a log.

**What a learner should challenge:** Explain why this policy does not make unbounded recursive callbacks safe.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `createCounter`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
