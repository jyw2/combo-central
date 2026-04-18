const { generatePresetIds } = require("../../../../utils/presetIdsUtil")
const common = require("../../local-commonButtonVariants")


const preset = {
  "Command Normals": [
    [
      {
        name: "collarbone breaker",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "solar plexus strike",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "short uppercut",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "whirlwind kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          }
        ]],
      },
      {
        name: "axe kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          }
        ]],
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "high double strike",
        input: [[
          {
            buttons: [["RB"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ],
        ],
      },
    ],
    [{
      name: "fuwa triple strike",
      input: [[
        {
          buttons: [["B"]],
          command: [""],
        },
      ], [
        {
          buttons: [["D"]],
          command: [""],
        },
      ],
      [
        {
          buttons: [["RT"]],
          command: [""],
        },
      ],
      ],
    },
    {
      name: "2 hit fuwa triple strike",
      input: [[
        {
          buttons: [["B"]],
          command: [""],
        },
      ], [
        {
          buttons: [["D"]],
          command: [""],
        },
      ],
      ],
    },
    ]
  ],
  Specials: [
    [
      {
        name: "denjin charge",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["22"],
          },
        ]],
      },
      {
        name: "light hadoken",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium hadoken",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy hadoken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive hadoken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "denjin hadoken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
        playerState: ["denjin charged"],
      },
      {
        name: "denjin overdrive hadoken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
        playerState: ["denjin charged"],
      },
    ],
    [
      {
        name: "light shoryuken",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium shoryuken",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy shoryuken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive shoryuken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
      },
    ],
    [
      {
        name: "light high blade kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium high blade kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy high blade kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive high blade kick",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light hashogeki",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium hashogeki",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy hashogeki",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive hashogeki",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "denjin hashogeki",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
        playerState: ["denjin charged"],
      },
      {
        name: "denjin overdrive hashogeki",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
        playerState: ["denjin charged"],
      },
    ],
    [
      {
        name: "light tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "jumping tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"],
      },
      {
        name: "overdrive tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "air overdrive tatsumaki senpu-kakyu",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"],
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "shinku hadoken",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "denjin shinku hadoken",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
        playerState: ["denjin charged"],
      },
      {
        name: "lv.1 shin hashogeki",
        input: [[
          {
            buttons: [["A"], ["B"], ["RB"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "lv.2 shin hashogeki",
        input: [[
          {
            buttons: [["A:(short hold)"], ["B:(short hold)"], ["RB:(short hold)"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "lv.3 shin hashogeki",
        input: [[
          {
            buttons: [["A:(long hold)"], ["B:(long hold)"], ["RB:(long hold)"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "shin shoryuken",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};

generatePresetIds(preset, "ryu")
module.exports = { preset };