/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface CryptoSubsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelSubscription"
      | "deposit"
      | "getSubscriptionsData"
      | "makeScheduledPayments"
      | "subscriptionKeys"
      | "subscriptions"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptionsData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makeScheduledPayments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subscriptionKeys",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "subscriptions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptionsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeScheduledPayments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscriptionKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface CryptoSubs extends BaseContract {
  connect(runner?: ContractRunner | null): CryptoSubs;
  waitForDeployment(): Promise<this>;

  interface: CryptoSubsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cancelSubscription: TypedContractMethod<[], [void], "nonpayable">;

  deposit: TypedContractMethod<
    [
      _time: BigNumberish,
      _addressToWithdraw: AddressLike,
      _howManySubscriptions: BigNumberish
    ],
    [void],
    "payable"
  >;

  getSubscriptionsData: TypedContractMethod<
    [_addressToWithdraw: AddressLike],
    [
      [bigint[], bigint[], bigint[]] & {
        paidSubscriptions: bigint[];
        unpaidSubscriptions: bigint[];
        cancelledSubscriptions: bigint[];
      }
    ],
    "view"
  >;

  makeScheduledPayments: TypedContractMethod<[], [void], "nonpayable">;

  subscriptionKeys: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  subscriptions: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, string, bigint, bigint, boolean] & {
        depositAmount: bigint;
        time: bigint;
        addressToWithdraw: string;
        howManySubscriptions: bigint;
        subscriptionCount: bigint;
        isCancelled: boolean;
      }
    ],
    "view"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelSubscription"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [
      _time: BigNumberish,
      _addressToWithdraw: AddressLike,
      _howManySubscriptions: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getSubscriptionsData"
  ): TypedContractMethod<
    [_addressToWithdraw: AddressLike],
    [
      [bigint[], bigint[], bigint[]] & {
        paidSubscriptions: bigint[];
        unpaidSubscriptions: bigint[];
        cancelledSubscriptions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "makeScheduledPayments"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "subscriptionKeys"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "subscriptions"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, string, bigint, bigint, boolean] & {
        depositAmount: bigint;
        time: bigint;
        addressToWithdraw: string;
        howManySubscriptions: bigint;
        subscriptionCount: bigint;
        isCancelled: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
