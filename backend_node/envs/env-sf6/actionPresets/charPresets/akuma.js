const common = require("../../sf6-commonButtonVariants")
const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "skull splitter",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "resso snap kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "kikoku",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "rago high kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          }
        ]],
      },
      {
        name: "tenmaku blade kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          }
        ]],
        playerState: ["jumping"],
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "viscera piercer",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],
        ],
      },
    ],
    [{
      name: "bone crusher axe kick",
      input: [[
        {
          buttons: [["C"]],
          command: [""],
        },
      ], [
        {
          buttons: [["RT"]],
          command: [""],
        },
      ],
      ],
    },],
    [{
      name: "kikoku combination",
      input: [
        [
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["6"],
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
      name: "2 hit kikoku combination",
      input: [
        [
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ],
      ],
    }
    ]
  ],
  Specials: [
    [
      {
        name: "light gou hadoken",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium gou hadoken",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy gou hadoken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive gou hadoken",
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
        name: "light lv.2 charged gou hadoken",
        input: [[
          {
            buttons: [["A:(short hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium lv.2 charged gou hadoken",
        input: [[
          {
            buttons: [["B:(short hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy lv.2 charged gou hadoken",
        input: [[
          {
            buttons: [["RB:(short hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive lv.2 charged gou hadoken",
        input: [[
          {
            buttons: [["A:(short hold)", "B:(short hold)"], ["A:(short hold)", "RB:(short hold)"], ["B:(short hold)", "RB:(short hold)"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light lv.3 charged gou hadoken",
        input: [[
          {
            buttons: [["A:(long hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium lv.3 charged gou hadoken",
        input: [[
          {
            buttons: [["B:(long hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy lv.3 charged gou hadoken",
        input: [[
          {
            buttons: [["RB:(long hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive lv.3 charged gou hadoken",
        input: [[
          {
            buttons: [["A:(long hold)", "B:(long hold)"], ["A:(long hold)", "RB:(long hold)"], ["B:(long hold)", "RB:(long hold)"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "jumping  gou hadoken",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236"],
          },
        ]],
        playerState: ["jumping"],

      },
      {
        name: "jumping overdrive gou hadoken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
        playerState: ["jumping"],
      },
    ],
    [
      {
        name: "light gou shoryuken",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium gou shoryuken",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy gou shoryuken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive gou shoryuken",
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
        name: "light adamant flame",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium adamant flame",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy adamant flame",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive adamant flame",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "adamant flame followup",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["akuma-overdrive-adamant-flame|akuma-heavy-adamant-flame|akuma-medium-adamant-flame|akuma-light-adamant-flame"],
      },
    ],
    [
      {
        name: "light tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },]
    , [
      {
        name: "jumping tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping overdrive tatsumaki zanku-kyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "demon raid",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive demon raid",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "demon low slash",
        input: [[
          {
            buttons: [[]],
            command: [""],
          },
        ]],
        dependencies: ["akuma-demon-raid|akuma-overdrive-demon-raid"],
      },
      {
        name: "demon guillotine",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["akuma-demon-raid|akuma-overdrive-demon-raid"],
      },
      {
        name: "demon blade kick",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["akuma-demon-raid|akuma-overdrive-demon-raid"],
      },
      {
        name: "demon swoop",
        input: [[
          {
            buttons: [[]],
            command: ["2"],
          },
        ]],
        dependencies: ["akuma-demon-raid|akuma-overdrive-demon-raid"],
      },
      {
        name: "demon gou zanku",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236"],
          },
        ]],
        dependencies: ["akuma-overdrive-demon-raid"],
      },
      {
        name: "demon gou rasen",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        dependencies: ["akuma-overdrive-demon-raid"],
      },
    ],
    [
      {
        name: "forward ashura senku",
        input: [[
          {
            buttons: [["D", "C", "RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "backwards ashura senku",
        input: [[
          {
            buttons: [["D", "C", "RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "oboro throw",
        input: [[
          {
            buttons: [["A", "D"]],
            command: [""],
          },
        ]],
        dependencies: ["akuma-forward-ashura-senku"],
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "messatsu gohado",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "tenma gozanku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
        playerState: ["jumping"],
      },
      {
        name: "empyrean's end",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "sip of calamity",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "shun goku satsu",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: ["6"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      },
    ],
  ],
  "Hidden Arts": [
    [
      {
        name: "double zanku hadoken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214214"],
          },
        ]],
        playerState: ["jumping"],
      },
      {
        name: "misogi",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "kongou-kokuretsuzan",
        input: [[
          {
            buttons: [["A", "B", "RB"]],
            command: ["22"],
          },
        ]],
      },
    ]
  ]
};

generatePresetIds(preset, "akuma")
module.exports = { preset };