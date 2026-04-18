const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Unique Throws": [
    [{
      name: "neutral throw",
      input: [
        [
          {
            buttons: [["A", "D"]],
            command: [""],
          },
        ],
      ],
    },
    {
      name: "neutral crouch throw",
      input: [
        [
          {
            buttons: [["A", "D"]],
            command: ["2"],
          },
        ],
      ],
    },
    {
      name: "forward crouch throw",
      input: [
        [
          {
            buttons: [["A", "D"]],
            command: ["3"],
          },
        ],
      ],
    },
    {
      name: "back crouch throw",
      input: [
        [
          {
            buttons: [["A", "D"]],
            command: ["1"],
          },
        ],
      ],
    },]
  ],
  "Command Normals": [
    [
      {
        name: "hellstab",
        input: [
          [
            {
              buttons: [["B"]],
              command: ["3"],
            },
          ],
        ],
      },
      {
        name: "knee hammer",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "headbutt",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "cyclone wheel kick",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "smetana dropkick",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["3"],
            },
          ],
        ],
      },
      {
        name: "power stomp",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["22"],
            },
          ],
        ],
      },
      {
        name: "flying body press",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ],
        ],
        playerState: ["jumping"]
      },
      {
        name: "flying headbutt",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["8"],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "machine gun chops",
        input: [
          [
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
          [
            {
              buttons: [["B"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "2 hit machine gun chops",
        input: [
          [
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
    [
      {
        name: "power stomps",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["22"],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ],
          [
            {
              buttons: [["C"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "2 hit power stomps",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["22"],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ],
        ],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "double lariat",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
      },
      {
        name: "overdrive double lariat",
        input: [[
          {
            buttons: [["A", "B", "RB"]],
            command: [""],
          },
        ]],
      },
    ],
    [
      {
        name: "borscht dynamite",
        input: [[
          {
            buttons: common.anyKick,
            command: ["632147896"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "overdrive borscht dynamite",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["632147896"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "light screw piledriver",
        input: [[
          {
            buttons: [["A"]],
            command: ["632147896"],
          },
        ]],
      },
      {
        name: "medium screw piledriver",
        input: [[
          {
            buttons: [["B"]],
            command: ["632147896"],
          },
        ]],
      },
      {
        name: "heavy screw piledriver",
        input: [[
          {
            buttons: [["RB"]],
            command: ["632147896"],
          },
        ]],
      },
      {
        name: "overdrive screw piledriver",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["632147896"],
          },
        ]],
      },
    ],
    [
      {
        name: "russian suplex",
        input: [[
          {
            buttons: common.anyKick,
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive russian suplex",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["63214"],
          },
        ]],
      },
    ],
    [
      {
        name: "siberian express",
        input: [[
          {
            buttons: common.anyKick,
            command: ["63214"],
          },
        ]],
        playerState: ["far from opponent"]
      },
      {
        name: "overdrive siberian express",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["63214"],
          },
        ]],
        playerState: ["far from opponent"]
      },
    ],
    [
      {
        name: "tundra storm",
        input: [[
          {
            buttons: [["RT"]],
            command: ["22"],
          },
        ]],
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "aerial russian slam",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "cyclone lariat",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "charged cyclone lariat",
        input: [[
          {
            buttons: [["A:(hold)"], ["B:(hold)"], ["RB:(hold)"]],
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "bolshoi storm buster",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["63214789632147896"],
          },
        ]],
      },
    ],
  ],
};

generatePresetIds(preset, "zangief")
module.exports = { preset };
