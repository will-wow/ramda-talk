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

      <NotesList
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
      <Heading size={1}>Immutable Deep Updates</Heading>

      <NotessList
        notes={[
          "Even if you don't take advantage of the function composition stuff that's next",
          "Ramda is great for Redux",
          "Helps do immutable deep updates in reducers"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Shape</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateData}
      />

      <NotesList
        notes={[
          "Let's say you have this complicated data structure.",
          " Alice just got a job in the LA office (lucky them)",
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

      <NotesList notes={["Mutation, clone, spread"]} />
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Amazing</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateRamda}
      />

      <NotesList
        notes={[
          "AssocPath for a single update, mergeDeepRight or Left for multi-update",
          "Efficient because copy-by-value, fine if you always use ramda."
        ]}
      />
      <Notes />
    </Slide>

    <Slide>
      <Heading size={1}>Wrapping Up</Heading>

      <Notes>
        So! Hopefully that was a good taste of what programming with Ramda is
        like. It's a pretty different and fun way to program, and is a way to
        get a lot of the benefits of a super functional langage like Haskell or
        Elixir, but within an existing javascript project. As we've seen, it's
        also usually pretty straightforward to refactor a lodash function into a
        ramda one, so this is definitely something you can start using today, if
        your team is up for it.
      </Notes>
    </Slide>

    <Slide bgImage="./img/do-it.gif" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
