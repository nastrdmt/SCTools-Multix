/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Subscription2,
  Subscription2Interface,
} from "../../../Subs/Subscriber.sol/Subscription2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
    ],
    name: "SubscriptionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "SubscriptionStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
    ],
    name: "checkSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "makePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "startSubscription",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061168c806100606000396000f3fe60806040526004361061004a5760003560e01c806324e9edb01461004f5780632e1a7d4d146100665780634f62647e1461008f5780635cf504e1146100b8578063d8d79700146100d4575b600080fd5b34801561005b57600080fd5b506100646100eb565b005b34801561007257600080fd5b5061008d60048036038101906100889190610e04565b610221565b005b34801561009b57600080fd5b506100b660048036038101906100b19190610e8f565b6103a2565b005b6100d260048036038101906100cd9190610e04565b61072b565b005b3480156100e057600080fd5b506100e96109f6565b005b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661017a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017190610f19565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549060ff021916905560018201600090556002820160009055600382016000905550507f71215198e3f86c24dc3af6d0d7f84d0095e5ee736aa56daf9927fae51935e95d336040516102179190610f48565b60405180910390a1565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a690610fd5565b60405180910390fd5b804710156102f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e990611041565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161031890611092565b60006040518083038185875af1925050503d8060008114610355576040519150601f19603f3d011682016040523d82523d6000602084013e61035a565b606091505b505090508061039e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610395906110f3565b60405180910390fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042790610fd5565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166104bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b690611185565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015461054f91906111d4565b42106107285760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546040516105de90611092565b60006040518083038185875af1925050503d806000811461061b576040519150601f19603f3d011682016040523d82523d6000602084013e610620565b606091505b5050905080610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b90611254565b60405180910390fd5b7f3a2d0e41c506b136330c6e5e0295ccbf0966daece99bfe7c89020cc01dbfb8d682600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546040516106d7929190611283565b60405180910390a142600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b50565b6000811161076e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107659061131e565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156107fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f59061138a565b60405180910390fd5b600061080982610d2b565b90508034101561084e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610845906113f6565b60405180910390fd5b604051806080016040528060011515815260200142815260200183815260200182815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155606082015181600301559050507f3569431152110722ac0db636dd27ae1423bce34e35a19c281a7b4fcbb280ceb53383604051610923929190611283565b60405180910390a1803411156109f257600081346109419190611416565b905060003373ffffffffffffffffffffffffffffffffffffffff168260405161096990611092565b60006040518083038185875af1925050503d80600081146109a6576040519150601f19603f3d011682016040523d82523d6000602084013e6109ab565b606091505b50509050806109ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e690611496565b60405180910390fd5b50505b5050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16610a85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7c90610f19565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154610b1591906111d4565b421015610b57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4e90611528565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154604051610be090611092565b60006040518083038185875af1925050503d8060008114610c1d576040519150601f19603f3d011682016040523d82523d6000602084013e610c22565b606091505b5050905080610c66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5d90611254565b60405180910390fd5b7f3a2d0e41c506b136330c6e5e0295ccbf0966daece99bfe7c89020cc01dbfb8d633600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154604051610cd9929190611283565b60405180910390a142600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b600080662386f26fc100009050600060018403610d5657600782610d4f9190611577565b9050610dbf565b60078403610d6657819050610dbe565b601f8403610d8257600482610d7b91906115a8565b9050610dbd565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db490611636565b60405180910390fd5b5b5b8092505050919050565b600080fd5b6000819050919050565b610de181610dce565b8114610dec57600080fd5b50565b600081359050610dfe81610dd8565b92915050565b600060208284031215610e1a57610e19610dc9565b5b6000610e2884828501610def565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e5c82610e31565b9050919050565b610e6c81610e51565b8114610e7757600080fd5b50565b600081359050610e8981610e63565b92915050565b600060208284031215610ea557610ea4610dc9565b5b6000610eb384828501610e7a565b91505092915050565b600082825260208201905092915050565b7f596f7520617265206e6f74207375627363726962656400000000000000000000600082015250565b6000610f03601683610ebc565b9150610f0e82610ecd565b602082019050919050565b60006020820190508181036000830152610f3281610ef6565b9050919050565b610f4281610e51565b82525050565b6000602082019050610f5d6000830184610f39565b92915050565b7f4f6e6c792074686520636f6e7472616374206f776e65722063616e2063616c6c60008201527f20746869732e0000000000000000000000000000000000000000000000000000602082015250565b6000610fbf602683610ebc565b9150610fca82610f63565b604082019050919050565b60006020820190508181036000830152610fee81610fb2565b9050919050565b7f496e73756666696369656e7420636f6e74726163742062616c616e6365000000600082015250565b600061102b601d83610ebc565b915061103682610ff5565b602082019050919050565b6000602082019050818103600083015261105a8161101e565b9050919050565b600081905092915050565b50565b600061107c600083611061565b91506110878261106c565b600082019050919050565b600061109d8261106f565b9150819050919050565b7f5769746864726177616c206661696c6564000000000000000000000000000000600082015250565b60006110dd601183610ebc565b91506110e8826110a7565b602082019050919050565b6000602082019050818103600083015261110c816110d0565b9050919050565b7f5375627363726962657220646f6573206e6f74206861766520616e206163746960008201527f766520737562736372697074696f6e0000000000000000000000000000000000602082015250565b600061116f602f83610ebc565b915061117a82611113565b604082019050919050565b6000602082019050818103600083015261119e81611162565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111df82610dce565b91506111ea83610dce565b9250828201905080821115611202576112016111a5565b5b92915050565b7f5061796d656e74206661696c6564000000000000000000000000000000000000600082015250565b600061123e600e83610ebc565b915061124982611208565b602082019050919050565b6000602082019050818103600083015261126d81611231565b9050919050565b61127d81610dce565b82525050565b60006040820190506112986000830185610f39565b6112a56020830184611274565b9392505050565b7f4475726174696f6e2073686f756c642062652067726561746572207468616e2060008201527f7a65726f00000000000000000000000000000000000000000000000000000000602082015250565b6000611308602483610ebc565b9150611313826112ac565b604082019050919050565b60006020820190508181036000830152611337816112fb565b9050919050565b7f596f752061726520616c72656164792073756273637269626564000000000000600082015250565b6000611374601a83610ebc565b915061137f8261133e565b602082019050919050565b600060208201905081810360008301526113a381611367565b9050919050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b60006113e0601283610ebc565b91506113eb826113aa565b602082019050919050565b6000602082019050818103600083015261140f816113d3565b9050919050565b600061142182610dce565b915061142c83610dce565b9250828203905081811115611444576114436111a5565b5b92915050565b7f526566756e64206661696c656400000000000000000000000000000000000000600082015250565b6000611480600d83610ebc565b915061148b8261144a565b602082019050919050565b600060208201905081810360008301526114af81611473565b9050919050565b7f5061796d656e7420706572696f6420686173206e6f742070617373656420796560008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611512602183610ebc565b915061151d826114b6565b604082019050919050565b6000602082019050818103600083015261154181611505565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061158282610dce565b915061158d83610dce565b92508261159d5761159c611548565b5b828204905092915050565b60006115b382610dce565b91506115be83610dce565b92508282026115cc81610dce565b915082820484148315176115e3576115e26111a5565b5b5092915050565b7f496e76616c6964206475726174696f6e00000000000000000000000000000000600082015250565b6000611620601083610ebc565b915061162b826115ea565b602082019050919050565b6000602082019050818103600083015261164f81611613565b905091905056fea26469706673582212205ae96a354e925ba2455ea1d27d4a0d725b1b859d2eac631bab0460f5471f4a0564736f6c63430008130033";

type Subscription2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Subscription2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Subscription2__factory extends ContractFactory {
  constructor(...args: Subscription2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Subscription2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Subscription2__factory {
    return super.connect(runner) as Subscription2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Subscription2Interface {
    return new Interface(_abi) as Subscription2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Subscription2 {
    return new Contract(address, _abi, runner) as unknown as Subscription2;
  }
}