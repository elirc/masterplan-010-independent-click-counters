# Building Independent Click Counters, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Each factory call owns a private next value. A new counter first emits zero, includes its limit before wrapping, notifies once with that emitted value and returns it. State advances before notification, including when an observer throws.

The smallest useful result answers this user need: Two practice stations need counters that never share accidental state. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Predict before clicking

Write A, A, B, A, B and predict five returned values before running the app. If you expect B to continue A’s sequence, draw the scope created by each factory call. The key fact is not that the functions have different code; it is that they retain access to different instances of the next variable.

**Pause and produce evidence:** A, A, B, A, B. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Make the boundary inclusive

For limit 2, the supported sequence is 0, 1, 2, 0. Capture emitted from next, then set the next state to zero only after the current emitted value equals the limit. A comparison or increment in the wrong place can skip zero, skip the limit, or allow one value above the limit.

**Pause and produce evidence:** limit 2, four calls. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Specify the observer contract

The callback receives one argument, exactly the value returned by the call. The function does not use the callback’s return value. If the callback throws, the current call throws too, but state has already advanced. This is a small example of why side-effect ordering belongs in a contract rather than being treated as incidental line order.

**Pause and produce evidence:** Callback records arguments. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Keep browser state separate from counter state

The UI owns buttons, latest-value labels and a bounded event list. The core owns only numeric progression and notification. Reset constructs two new closures and clears the display. It does not reach into a closure to mutate a private variable. The event log is capped at twenty entries so repeated practice does not grow the DOM indefinitely.

**Pause and produce evidence:** Click A twice, Reset both stations, then click A again. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Write the invocation trace and specify callback arguments yourself.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
