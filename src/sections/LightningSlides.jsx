import React from "react";

import {
  Heading,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  SlideSet,
  CodePane
} from "spectacle";

import NoteList from "../elements/NoteList";

import curryAddJs from "../code/curryAdd.js";
import curryAddSalesTax from "../code/curryAddSalesTax.js";
import curryAddSalesTaxToAll from "../code/curryAddSalesTaxToAll.js";
import addSalesTaxForTen from "../code/addSalesTaxForTen.js";
import addSalesTaxForTenCompose from "../code/addSalesTaxForTenCompose.js";
import addSalesTaxForTenPipe from "../code/addSalesTaxForTenPipe.js";
import addSalesTaxForTenWithRounding from "../code/addSalesTaxForTenWithRounding.js";
import marbleModel from "../code/marbleModel.ts";
import redsEs6 from "../code/redsEs6.js";
import redsRefactor1 from "../code/redsRefactor1.js";
import redsRefactor2 from "../code/redsRefactor2.js";
import filterMarblesEs6 from "../code/filterMarblesEs6.js";
import filterMarblesRefactor1 from "../code/filterMarblesRefactor1.js";
import filterMarblesRefactor2 from "../code/filterMarblesRefactor2.js";
import favoriteColorTypes from "../code/favoriteColorTypes.js";
import favoriteColorImperative from "../code/favoriteColorImperative.js";
import favoriteColorPipeline from "../code/favoriteColorPipeline.js";
import favoriteColorOutput from "../code/favoriteColorOutput.js";
import favoriteColorPipelineGroupBy from "../code/favoriteColorPipelineGroupBy.js";
import favoriteColorPipelineMap from "../code/favoriteColorPipelineMap.js";
import favoriteColorPipelineToPairs from "../code/favoriteColorPipelineToPairs.js";
import favoriteColorPipelineSortBy from "../code/favoriteColorPipelineSortBy.js";
import favoriteColorPipelineLast from "../code/favoriteColorPipelineLast.js";
import favoriteColorPipelineHead from "../code/favoriteColorPipelineHead.js";
import favoriteColorPipelineNames from "../code/favoriteColorPipelineNames.js";
import immutableDeepUpdateData from "../code/immutableDeepUpdateData.js";
import immutableDeepUpdateLame from "../code/immutableDeepUpdateLame.js";
import immutableDeepUpdateRamda from "../code/immutableDeepUpdateRamda.js";
import immutableDeepUpdateCopied from "../code/immutableDeepUpdateCopied";

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
        Ramda:
      </Heading>
      <Heading
        fit
        size={2}
        caps
        lineHeight={1}
        textColor="secondary"
        margin="1rem 0"
      >
        an absolute unit.
      </Heading>

      <NoteList
        notes={[
          "today want to convince you to be in awe at ramda, what an absolute unit",
          "not a lot of ram-related memes, so close enough"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Lodash written by Haskell programmers</Heading>

      <NoteList
        notes={[
          "Ramda is a JS utility library like lodash or underscore",
          "more functional focus",
          "Ramda makes it easy to write super functional code in JS",
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
          "Alice just got a job in the LA office (lucky her)",
          "you want to update her user record's second street address"
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
          "Mutation: no good in an immutable system",
          "clone: works fine, but slow",
          "spread: can get complicated if it gets deeply nested"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Amazing</Heading>

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
          "copies all objects and arrays by reference",
          "pieces of the tree, like position, skills, first address don't get cloned",
          "shares references with other versions",
          "only do immutable updates, it's fine"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Part 2: Function Composition</Heading>

      <NoteList notes={["part 2: function composition"]} />
    </Slide>

    <Slide>
      <Heading size={2}>Marble Types</Heading>

      <CodePane textSize="2rem" lang="javascript" source={favoriteColorTypes} />

      <NoteList
        notes={[
          "for next example, we're going to operate on these marble types",
          "take a list of these marbles with a color and size, and find the most frequent color"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Favorite Color: Imperative
      </Heading>
      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorImperative}
      />

      <NoteList
        notes={[
          "could solve in an imperative way with a couple loops",
          "that's lame"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        Curry and pipes: favoriteColor()
      </Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineNames}
      />

      <NoteList
        notes={[
          "Instead do it with Ramda",
          "Ramda's pipe let you write code almost like you do with elixir's pipe operator",
          "All ramda functions are curried",
          "means if the function takes two args, you can pass one and get a function back that takes one arg",
          "also data-last",
          "so like R.map can take just a function like R.length, and returns a function that runs length on every item in array",
          "So you take a bunch of functions, pass params in to make them unary",
          "then pipe them all together",
          "let the data flow through, top to bottom",
          "A ramda codebase often ends up being a bunch of small functions",
          "in this case just aliases for better naming, like highest pair instead of head",
          "then a more complicated pipe that chains stuff together",
          "and you use that pure chained function in your:",
          "components or reducers or controller or whatever"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Wrapping Up</Heading>

      <NoteList
        notes={[
          "So! Hopefully that was a good taste of what programming with Ramda is like. It's a pretty different and fun way to program, and is a way to get a lot of the benefits of a super functional language like Haskell or Elixir, but within an existing javascript project. And it's usually pretty straightforward to refactor a lodash function into a ramda one, or just use both for a while. So this is definitely something you can start using today, if your team is up for it."
        ]}
      />
    </Slide>

    <Slide bgImage="./img/do-it.gif" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
