const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "charged heavy punch",
        input: [
          [
            {
              buttons: [["RB:(hold)"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "charged crouching heavy punch",
        input: [
          [
            {
              buttons: [["RB:(hold)"]],
              command: ["2"],
            },
          ],
        ],
      },
      {
        name: "charged jumping heavy punch",
        input: [
          [
            {
              buttons: [["RB:(hold)"]],
              command: [""],
            },
          ],
        ],
        playerState:["jumping"]
      },
      {
        name: "charged heavy kick",
        input: [
          [
            {
              buttons: [["RT:(hold)"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "charged crouching heavy kick",
        input: [
          [
            {
              buttons: [["RT:(hold)"]],
              command: ["2"],
            },
          ],
        ],
      },
      {
        name: "charged jumping heavy kick",
        input: [
          [
            {
              buttons: [["RT:(hold)"]],
              command: [""],
            },
          ],
        ],
        playerState:["jumping"]
      },
    ],
    [
    {
      name: "novacule",
      input: [
        [
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ],
      ],
    },
    {
      name: "magna bunker",
      input: [
        [
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ],
      ],
    },
    {
      name: "charged magna bunker",
      input: [
        [
          {
            buttons: [["RB:(hold)"]],
            command: ["4"],
          },
        ],
      ],
    },
    {
      name: "malleus breaker",
      input: [
        [
          {
            buttons: [["RB"]],
            command: ["3"],
          },
        ],
      ],
    },
    {
      name: "charged malleus breaker",
      input: [
        [
          {
            buttons: [["RB:(hold)"]],
            command: ["3"],
          },
        ],
      ],
    },
    {
      name: "falx crusher",
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
      name: "charged falx crusher",
      input: [
        [
          {
            buttons: [["RT:(hold)"]],
            command: ["6"],
          },
        ],
      ],
    },
    {
      name: "caelum arc",
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
      name: "charged caelum arc",
      input: [
        [
          {
            buttons: [["RB:(hold)"]],
            command: ["2"],
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
        name: "light two hitter",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["A"]],
              command: [""],
            },
          ],
        ],
      }, {
        name: "medium two hitter",
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
      {
        name: "heavy two hitter",
        input: [
          [
            {
              buttons: [["RB"]],
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
      {
        name: "novacule swipe",
        input: [
          [
            {
              buttons: [["B"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "novacule thrust",
        input: [
          [
            {
              buttons: [["B"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "malleus breaker combo",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["3"],
            },
          ], [
            {
              buttons: [["RB"]],
              command: ["3"],
            },
          ],
        ],
      },
      {
        name: "falx crusher combo",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "volare combo",
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
        playerState: ["jumping"]
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light gladius",
        input: [[
          {
            buttons: [["A"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "medium gladius",
        input: [[
          {
            buttons: [["B"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "heavy gladius",
        input: [[
          {
            buttons: [["RB"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive gladius",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["63214"],
          },
        ]],
      },
      {
        name: "charged light gladius",
        input: [[
          {
            buttons: [["A:(hold)"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "charged medium gladius",
        input: [[
          {
            buttons: [["B:(hold)"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "charged heavy gladius",
        input: [[
          {
            buttons: [["RB:(hold)"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "charged overdrive gladius",
        input: [[
          {
            buttons: [["A:(hold)", "B:(hold)"], ["A:(hold)", "RB:(hold)"], ["B:(hold)", "RB:(hold)"]],
            command: ["63214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light dimachaerus",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium dimachaerus",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy dimachaerus",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive dimachaerus",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "dimachaerus followup",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies:["marisa-light-dimachaerus|marisa-medium-dimachaerus|marisa-heavy-dimachaerus|marisa-overdrive-dimachaerus"]
      },
    ],
    [
      {
        name: "light phalanx",
        input: [[
          {
            buttons: [["D"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium phalanx",
        input: [[
          {
            buttons: [["C"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy phalanx",
        input: [[
          {
            buttons: [["RT"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive phalanx",
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
        name: "light quadriga",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium quadriga",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy quadriga",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive quadriga",
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
        name: "scutum",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive scutum",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "tonitrus",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies:["marisa-scutum|marisa-overdrive-skutum"]
      },
      {
        name: "tonitrus 2",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies:["marisa-tonitrus"]
      },
      {
        name: "procella",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies:["marisa-scutum|marisa-overdrive-skutum"]
      },
      {
        name: "enfold",
        input: [[
          {
            buttons: [["A","D"]],
            command: [""],
          },
        ]],
        dependencies:["marisa-scutum|marisa-overdrive-skutum"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "javelin of marisa",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "meteorite",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "goddess of the hunt",
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

generatePresetIds(preset, "marisa")
module.exports = { preset };
