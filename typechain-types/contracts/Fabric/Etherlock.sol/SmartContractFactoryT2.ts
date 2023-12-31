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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface SmartContractFactoryT2Interface extends Interface {
  getFunction(
    nameOrSignature: "createSmartContract" | "fee" | "smartContractCount"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "SmartContractCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createSmartContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "smartContractCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createSmartContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "smartContractCount",
    data: BytesLike
  ): Result;
}

export namespace SmartContractCreatedEvent {
  export type InputTuple = [
    creator: AddressLike,
    smartContract: AddressLike,
    contractCount: BigNumberish
  ];
  export type OutputTuple = [
    creator: string,
    smartContract: string,
    contractCount: bigint
  ];
  export interface OutputObject {
    creator: string;
    smartContract: string;
    contractCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SmartContractFactoryT2 extends BaseContract {
  connect(runner?: ContractRunner | null): SmartContractFactoryT2;
  waitForDeployment(): Promise<this>;

  interface: SmartContractFactoryT2Interface;

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

  createSmartContract: TypedContractMethod<[], [void], "payable">;

  fee: TypedContractMethod<[], [bigint], "view">;

  smartContractCount: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createSmartContract"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "smartContractCount"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "SmartContractCreated"
  ): TypedContractEvent<
    SmartContractCreatedEvent.InputTuple,
    SmartContractCreatedEvent.OutputTuple,
    SmartContractCreatedEvent.OutputObject
  >;

  filters: {
    "SmartContractCreated(address,address,uint256)": TypedContractEvent<
      SmartContractCreatedEvent.InputTuple,
      SmartContractCreatedEvent.OutputTuple,
      SmartContractCreatedEvent.OutputObject
    >;
    SmartContractCreated: TypedContractEvent<
      SmartContractCreatedEvent.InputTuple,
      SmartContractCreatedEvent.OutputTuple,
      SmartContractCreatedEvent.OutputObject
    >;
  };
}
