import React from "react";

import { Heading, Slide, SlideSet, CodePane, Text } from "spectacle";

import NoteList from "../elements/NoteList";

import immutableDeepUpdateData from "../code/immutableDeepUpdateData.js";
import immutableDeepUpdateLame from "../code/immutableDeepUpdateLame.js";
import immutableDeepUpdateRamda from "../code/immutableDeepUpdateRamda.js";
import immutableDeepUpdateCopied from "../code/immutableDeepUpdateCopied";
import onlyPositiveArrow from "../code/onlyPositiveArrow";
import onlyPositiveCurry from "../code/onlyPositiveCurry";
import modePipe from "../code/modePipe";
import modePipeValues from "../code/modePipeValues";

export default (
  <SlideSet>
    <Slide bgImage="./img/unit.jpg" bgSize="contain" bgRepeat="no-repeat">
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="secondary"
        margin="1rem 0"
      >
        Ramda
      </Heading>

      <NoteList
        notes={[
          "5-minute intro to ramda, go",
          "Ramda is a JS utility library like lodash or underscore",
          "more functional focus",
          "makes it easy to write super functional code in JS",
          "Lodash written by Haskell programmers",
          "I've used on Gap PEM and SharesPost",
          "Also used on CoCo, TODO: MORE"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Part 1: Immutable Deep Updates</Heading>

      <NoteList
        notes={[
          "First thing, even if you don't take advantage of the function composition stuff that's next",
          "Ramda is great for Redux",
          "Helps do immutable deep updates in reducers"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Immutable Deep Updates: Shape
      </Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={immutableDeepUpdateData}
      />

      <NoteList
        notes={[
          "Let's say you have this complicated data structure.",
          "describes a C5 employee, Alice",
          "Alice just heard this talk",
          "obviously her ramda skill just went to 10",
          "we want to update state.employee.skills[2].skill"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Lame</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateLame}
      />

      <NoteList
        notes={[
          "How might we do this normally",
          "Mutation: no good in an immutable system like redux",
          "clone: slow",
          "spread: nice, complicated when deeply nested"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        Immutable Deep Updates: Amazing
      </Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateRamda}
      />

      <NoteList
        notes={[
          "Instead, ramda to the rescue",
          "AssocPath for a single update, mergeDeepRight or Left for multi-update",
          "Efficient because copy-by-value. Why?"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        Immutable Deep Updates: Efficient
      </Heading>

      <CodePane
        textSize="1.75rem"
        lang="javascript"
        source={immutableDeepUpdateCopied}
      />

      <NoteList
        notes={[
          "if it finds an array or object that isn't updated",
          "copies by reference",
          "doesn't waste cycles cloning things that won't change"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Part 2: Function Composition</Heading>

      <NoteList
        notes={[
          "part 2: function composition",
          "besides immutable updates",
          "lets us write functional, declarative code"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        Curried Functions
      </Heading>

      <CodePane textSize="3rem" lang="javascript" source={onlyPositiveArrow} />
      <Text>Is the same as</Text>
      <CodePane textSize="3rem" lang="javascript" source={onlyPositiveCurry} />

      <NoteList
        notes={[
          "key is all the functions are curried",
          "we want a function onlyPositive that filters an array for numbers > 0",
          "traditional way would be:",
          "make a function that takes an array and passes the array and a isGreaterThanZero function to filter",
          "with currying, same thing is one-liner",
          "just passing filter a function returns a function that takes an array and filters it",
          "note ramda functions take their data paramter (the array or whatever) as they last paramter",
          "if array came first like in lodash, not as useful"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        Example: Mode
      </Heading>

      <CodePane textSize="2rem" lang="javascript" source={modePipe} />

      <NoteList
        notes={[
          "example: a function for mode",
          "the most frequently occurring value in a set",
          "this is what ramda code often looks like",
          "bunch of small functions, even just aliases with better names",
          "Because curried, some take params to make them unary",
          "like sortByCount or map(length)",
          "get down to a bunch of unary functions, chain together with pipe",
          "to do more complicated logic"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Pipe</Heading>

      <CodePane textSize="2rem" lang="javascript" source={modePipeValues} />

      <NoteList
        notes={[
          "Ramda's pipe let you write the same kind of code you would with elixir's pipe operator",
          "to-do list of functions",
          "output of one function gets fed into the input of the next one",
          "construct business logic from pipes of small named function",
          "pass them application state in framework code:",
          "components or reducers or controllers or whatever",
          "now have nice testable functional system"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Wrapping Up</Heading>

      <NoteList
        notes={[
          "That's a tiny taste of programming with ramda",
          "there's a lot more there",
          "fun and maintainable way to program",
          "recently added Ramda to long-running SharesPost",
          "I think has been pretty successful",
          "so if you're thinking of adding Ramda to your project"
        ]}
      />
    </Slide>

    <Slide bgImage="./img/do-it.gif" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
