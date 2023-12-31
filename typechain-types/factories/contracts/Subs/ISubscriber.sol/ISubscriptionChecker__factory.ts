/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISubscriptionChecker,
  ISubscriptionCheckerInterface,
} from "../../../../contracts/Subs/ISubscriber.sol/ISubscriptionChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isSubscriber",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ISubscriptionChecker__factory {
  static readonly abi = _abi;
  static createInterface(): ISubscriptionCheckerInterface {
    return new Interface(_abi) as ISubscriptionCheckerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISubscriptionChecker {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ISubscriptionChecker;
  }
}
