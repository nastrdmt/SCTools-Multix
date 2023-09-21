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

export interface ContractFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "contractCount" | "contracts" | "createContracts"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "contractCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createContracts",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "contractCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createContracts",
    data: BytesLike
  ): Result;
}

export namespace ContractCreatedEvent {
  export type InputTuple = [
    contractAddress: AddressLike,
    contractCount: BigNumberish
  ];
  export type OutputTuple = [contractAddress: string, contractCount: bigint];
  export interface OutputObject {
    contractAddress: string;
    contractCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ContractFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ContractFactory;
  waitForDeployment(): Promise<this>;

  interface: ContractFactoryInterface;

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

  contractCount: TypedContractMethod<[], [bigint], "view">;

  contracts: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createContracts: TypedContractMethod<
    [_numberOfContracts: BigNumberish],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contractCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "contracts"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createContracts"
  ): TypedContractMethod<[_numberOfContracts: BigNumberish], [void], "payable">;

  getEvent(
    key: "ContractCreated"
  ): TypedContractEvent<
    ContractCreatedEvent.InputTuple,
    ContractCreatedEvent.OutputTuple,
    ContractCreatedEvent.OutputObject
  >;

  filters: {
    "ContractCreated(address,uint256)": TypedContractEvent<
      ContractCreatedEvent.InputTuple,
      ContractCreatedEvent.OutputTuple,
      ContractCreatedEvent.OutputObject
    >;
    ContractCreated: TypedContractEvent<
      ContractCreatedEvent.InputTuple,
      ContractCreatedEvent.OutputTuple,
      ContractCreatedEvent.OutputObject
    >;
  };
}
