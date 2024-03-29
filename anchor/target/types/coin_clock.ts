export type CoinClock = {
  "version": "0.1.0",
  "name": "coin_clock",
  "instructions": [
    {
      "name": "close",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decrement",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "set",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "value",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "coinClock",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: CoinClock = {
  "version": "0.1.0",
  "name": "coin_clock",
  "instructions": [
    {
      "name": "close",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decrement",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "set",
      "accounts": [
        {
          "name": "coinClock",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "value",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "coinClock",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
