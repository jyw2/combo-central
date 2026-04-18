const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Target Combos": [
    [
      {
        name: "chin buster",
        input: [
          [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ],
        ],
      },
    ],
    [
      {
        name: "triple flash kicks",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ], [
          {
            buttons: [["C"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ],],
      },
      {
        name: "2 hit triple flash kicks",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ], [
          {
            buttons: [["C"]],
            command: [""],
          },
        ],],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light hadoken",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium hadoken",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy hadoken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive hadoken",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
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
        name: "light tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "jumping tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState:["jumping"]
      },
      {
        name: "jumping overdrive tatsumaki senpu-kyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState:["jumping"]
      },
    ],
    [
      {
        name: "light dragonlash kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium dragonlash kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy dragonlash kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive dragonlash kick",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["623"],
          },
        ]],
      },
    ],
    [
      {
        name: "light jinrai kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium jinrai kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy jinrai kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive jinrai kick",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "kazekama shin kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["6"],
          },
        ]],
        dependencies:["ken-masters-light-jinrai-kick|ken-masters-medium-jinrai-kick|ken-masters-heavy-jinrai-kick|ken-masters-overdrive-jinrai-kick"]
      },
      {
        name: "gorai axe kick",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
        dependencies:["ken-masters-light-jinrai-kick|ken-masters-medium-jinrai-kick|ken-masters-heavy-jinrai-kick|ken-masters-overdrive-jinrai-kick"]
      },
      {
        name: "senka snap kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
        dependencies:["ken-masters-light-jinrai-kick|ken-masters-medium-jinrai-kick|ken-masters-heavy-jinrai-kick|ken-masters-overdrive-jinrai-kick"]
      },
      {
        name: "kasai thrust kick",
        input: [[
          {
            buttons: common.anyKick,
            command: ["6"],
          },
        ]],
        dependencies:["ken-masters-light-jinrai-kick|ken-masters-medium-jinrai-kick|ken-masters-heavy-jinrai-kick|ken-masters-overdrive-jinrai-kick","ken-masters-senka-snap-kick|ken-masters-gorai-axe-kick|ken-masters-kazekama-shin-kick"]
      },
    ],
    [
      {
        name: "quick dash",
        input: [[
          {
            buttons: common.any2Kicks,
            command: [""],
          },
        ]],
      },
      {
        name: "emergency stop",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
      {
        name: "thunder kick",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
      {
        name: "forward step kick",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
      {
        name: "run tatsumaki senpukyaku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
      {
        name: "run shoryuken",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["623"],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
      {
        name: "run dragonlash kick",
        input: [[
          {
            buttons: common.anyKick,
            command: ["623"],
          },
        ]],
        dependencies:["ken-masters-quick-dash"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "dragonlash flame",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
    ], [
      {
        name: "shippu jinrai-kyaku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ],
    [
      {
        name: "shinryu reppa",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};
generatePresetIds(preset, "ken-masters")

module.exports = { preset };
