{
    "percentDifference": null,
    "quoteResponse": {
      "contextSlot": 252989014,
      "inAmount": "100202800",
      "inputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      "otherAmountThreshold": "821900762",
      "outAmount": "822723485",
      "outputMint": "AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr",
      "platformFee": null,
      "priceImpactPct": "0",
      "routePlan": [
        {
          "percent": 100,
          "swapInfo": {
            "ammKey": "3NeUgARDmFgnKtkJLqUcEUNCfknFCcGsFfMJCtx6bAgx",
            "feeAmount": "8419",
            "feeMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "inAmount": "100202800",
            "inputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "label": "Raydium CLMM",
            "outAmount": "100425544",
            "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
          }
        },
        {
          "percent": 29,
          "swapInfo": {
            "ammKey": "HTvjzsfX3yU6BUodCjZ5vZkUrAxMDTrBs3CJaq43ashR",
            "feeAmount": "9043",
            "feeMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "inAmount": "30127340",
            "inputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "label": "Meteora DLMM",
            "outAmount": "207736427",
            "outputMint": "So11111111111111111111111111111111111111112"
          }
        },
        {
          "percent": 71,
          "swapInfo": {
            "ammKey": "4YVLUZGEhsjfsWuxRbo6h18vL297HYRHTrLVE8bwpyCW",
            "feeAmount": "7564",
            "feeMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "inAmount": "70298204",
            "inputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "label": "Meteora DLMM",
            "outAmount": "484863545",
            "outputMint": "So11111111111111111111111111111111111111112"
          }
        },
        {
          "percent": 100,
          "swapInfo": {
            "ammKey": "4evBGJ7fx1cS4MJHcWDT3GVTHrW4ziUTp8sd3njf4bDd",
            "feeAmount": "1800760",
            "feeMint": "So11111111111111111111111111111111111111112",
            "inAmount": "692599972",
            "inputMint": "So11111111111111111111111111111111111111112",
            "label": "Whirlpool",
            "outAmount": "822723485",
            "outputMint": "AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr"
          }
        }
      ],
      "slippageBps": 10,
      "swapMode": "ExactIn",
      "timeTaken": 0.195987049
    },
    "swapSimulationResult": {
      "simulateTransactionResult": {
        "accounts": [
          null
        ],
        "err": {
          "InstructionError": [
            3,
            {
              "Custom": 3005
            }
          ]
        },
        "logs": [
          "Program ComputeBudget111111111111111111111111111111 invoke [1]",
          "Program ComputeBudget111111111111111111111111111111 success",
          "Program ComputeBudget111111111111111111111111111111 invoke [1]",
          "Program ComputeBudget111111111111111111111111111111 success",
          "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [1]",
          "Program log: CreateIdempotent",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
          "Program log: Instruction: GetAccountDataSize",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1569 of 1392795 compute units",
          "Program return: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA pQAAAAAAAAA=",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program 11111111111111111111111111111111 invoke [2]",
          "Program 11111111111111111111111111111111 success",
          "Program log: Initialize the associated token account",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
          "Program log: Instruction: InitializeImmutableOwner",
          "Program log: Please upgrade to SPL Token 2022 for immutable owner support",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1405 of 1386208 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
          "Program log: Instruction: InitializeAccount3",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4188 of 1382326 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 21845 of 1399700 compute units",
          "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [1]",
          "Program log: Instruction: SharedAccountsRoute",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
          "Program log: Instruction: TransferChecked",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 6200 of 1355029 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK invoke [2]",
          "Program log: Instruction: Swap",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
          "Program log: Instruction: Transfer",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 1285503 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
          "Program log: Instruction: Transfer",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 1277722 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
          "Program data: QMbN6CYIceIjQvJHZOYcdZtwW96ua3Ii9fKj+incWG/Mg7lrqC8SkVE+LF26QsO9gzDavYNO6ZflUDWJ+gBV9eCQ5OcuzAMSPbdaVhuqlrT5hZnIkdcW67eCFvm9ZzXM9jeWm2GwnLA4AciRc/6MiXjQIWCX5+3q02bOsSR457gFdL/3Lh+okD6K/AUAAAAAAAAAAAAAAAAw+fgFAAAAAAAAAAAAAAAAAERBO11Zl7H/AAAAAAAAAAD+WVwPjgIAAAAAAAAAAAAA6P///w==",
          "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK consumed 65855 of 1332370 compute units",
          "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK success",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 2021 of 1263628 compute units",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
          "Program LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo invoke [2]",
          "Program log: Instruction: Swap",
          "Program log: AnchorError caused by account: bin_array. Error Code: AccountNotEnoughKeys. Error Number: 3005. Error Message: Not enough account keys given to the instruction.",
          "Program LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo consumed 30584 of 1238249 compute units",
          "Program LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo failed: custom program error: 0xbbd",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 170190 of 1377855 compute units",
          "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 failed: custom program error: 0xbbd"
        ],
        "returnData": null,
        "unitsConsumed": 22145
      },
      "simulatedAmountChange": null
    },
    "swapTransaction": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAHFBFEo1p0T3tLNB3nEj/p71hJ9ObVjyqQdUgGii2NPbR+Ga2VmDBRvCQYEe4TIAOgvhjnmoZOm0Oe11P5ug7oBnsZ05ej2HYyqW4Zrg3CdUAvrw2QvqGKTYWCC+Ucc2ioER1998EWbwmS3XOEZIgNtY5VpUcm6KFRj1swzFd/ofA2Lme6we4wrUYERzg8eSDX0lfCrP+hIrPQf1m+SjZd1kw4AciRc/6MiXjQIWCX5+3q02bOsSR457gFdL/3Lh+okD23WlYbqpa0+YWZyJHXFuu3ghb5vWc1zPY3lpthsJywZRhuF6+q1dkAD7SsPRGCs+G10XmoJVIpauKIhEroQkhnQQQP5AeqsFBGoH5xsx9hmNdlxN72v4J91uC6Ksvw/oNKLHhDENbds3TkDnz8P6WodZuGuWNJp3bVX1OAAOqTucIDz0jJt3f9efayL1932Y7wyEUB8649kiQ6dn3zjWvX+rs8NkpQS1jZ6LZNw1meGKeUqmWdi/I3PkCL3yKph9pMsnP87V//MIPB4kdiZe7zmZjeOnoN8GhC8TU2vhTLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBkZv5SEXMv/srbpyw5vnvIzlu8X3EmssQ5s6QAAAAAR51VvyMcBu7nTFbs5oFQf9sbLeo/SOUQKxzaJWvBOPUT4sXbpCw72DMNq9g07pl+VQNYn6AFX14JDk5y7MAxKMlyWPTiSJ8bs9ECkUjg2DC1oTmdr/EIQEjnvY2+n4WYz7uC/dCS8AzaJ5ogLMAKchf2vPGzINzKFk3/kwb7UNtD/6J/XX9kp0wJsfKVh53ksJqzbfyd1RSzIap7OM5ehf3uxM64Lxxq1ZjcsFrQTb8l1LDAPBFhdUU+jX96D6+wQOAAUCwFwVAA4ACQMEFwEAAAAAABEGAAQAEg0pAQEPTykQAAsFCgQuEg8PEw8sECsXBQYVFBgpGhsZFg8wJzAmKAYIMS0lMBApKTIwAgwHDzAhMCIgBggxLSQwECkpMjAjCQ8qKRAdCBwKHx4BAy8xwSCbM0HWnIEDBAAAABpkAAEmHQEDJkcBAxEBZAMEMPn4BQAAAACdwwkxAAAAAAoAAASSkqt2HvIFIRvLudlv4FBcqDpKWoKkZdEfxBuvlQf6TQjc4uDe1d/Y2wYEKd2v6T4cROhw7v5BPwMh4if0j9/ZDsTfrzxmbYIqLZrLdZJ/sAQLDAkQAQ5wjeZPg1KnvPPwk5a6DUfmPSkcKXOadDMI4KfSeHGZOwWdn57w7wPzoKFzMHRRiKhLxVAQ00SFkrQdcoEOr3OTanY1TcC3NFVdRwTO0tfTAA=="
  }