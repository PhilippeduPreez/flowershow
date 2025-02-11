---
title: Mermaid Diagrams
---

Mermaid lets you create diagrams and visualizations using a simple text-based syntax. You can read more about [Mermaid diagrams on the Mermaid website here](https://mermaid-js.github.io/mermaid/#/).

Because it is text-based mermaid is very well suited to being using in plain-text and markdown.

## How to use

To create a mermaid diagram you embed inside a special code block with the type of `mermaid` i.e.

````md
```mermaid

MERMAID DIAGRAM CODE GOES HERE

```
````

### Examples

### Simple example

````md
```mermaid
graph LR

a --> b
```
````

This renders like this:

```mermaid
graph LR

a --> b
```
### Sequence example

Here's a more complex example of a sequence diagram:

````md
```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```
````

This renders like this:

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```