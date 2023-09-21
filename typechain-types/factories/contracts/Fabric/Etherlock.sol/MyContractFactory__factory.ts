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
import type { NonPayableOverrides } from "../../../../common";
import type {
  MyContractFactory,
  MyContractFactoryInterface,
} from "../../../../contracts/Fabric/Etherlock.sol/MyContractFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfContracts",
        type: "uint256",
      },
    ],
    name: "createContracts",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userToContracts",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506124b5806100206000396000f3fe6080604052600436106200002c5760003560e01c80633208aae11462000031578063413c935e1462000051575b600080fd5b6200004f60048036038101906200004991906200028e565b62000095565b005b3480156200005e57600080fd5b506200007d600480360381019062000077919062000325565b620001f1565b6040516200008c91906200037d565b60405180910390f35b8066038d7ea4c68000620000aa9190620003c9565b3414620000ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e5906200049b565b60405180910390fd5b60005b81811015620001ed576000336040516200010b9062000240565b6200011791906200037d565b604051809103906000f08015801562000134573d6000803e3d6000fd5b5090506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508080620001e490620004bd565b915050620000f1565b5050565b600060205281600052604060002081815481106200020e57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611f75806200050b83390190565b600080fd5b6000819050919050565b620002688162000253565b81146200027457600080fd5b50565b60008135905062000288816200025d565b92915050565b600060208284031215620002a757620002a66200024e565b5b6000620002b78482850162000277565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ed82620002c0565b9050919050565b620002ff81620002e0565b81146200030b57600080fd5b50565b6000813590506200031f81620002f4565b92915050565b600080604083850312156200033f576200033e6200024e565b5b60006200034f858286016200030e565b9250506020620003628582860162000277565b9150509250929050565b6200037781620002e0565b82525050565b60006020820190506200039460008301846200036c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003d68262000253565b9150620003e38362000253565b9250828202620003f38162000253565b915082820484148315176200040d576200040c6200039a565b5b5092915050565b600082825260208201905092915050565b7f596f75206e65656420746f2073656e642074686520636f727265637420616d6f60008201527f756e74206f662065746865720000000000000000000000000000000000000000602082015250565b600062000483602c8362000414565b9150620004908262000425565b604082019050919050565b60006020820190508181036000830152620004b68162000474565b9050919050565b6000620004ca8262000253565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620004ff57620004fe6200039a565b5b60018201905091905056fe60806040523480156200001157600080fd5b5060405162001f7538038062001f7583398181016040528101906200003791906200032e565b6040518060400160405280600981526020017f45544845524c4f434b00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f45484c00000000000000000000000000000000000000000000000000000000008152508160039081620000b49190620005da565b508060049081620000c69190620005da565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000146600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a76400006200014d60201b60201c565b50620007dc565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001bf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001b69062000722565b60405180910390fd5b620001d360008383620002ba60201b60201c565b8060026000828254620001e7919062000773565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200029a9190620007bf565b60405180910390a3620002b660008383620002bf60201b60201c565b5050565b505050565b505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002f682620002c9565b9050919050565b6200030881620002e9565b81146200031457600080fd5b50565b6000815190506200032881620002fd565b92915050565b600060208284031215620003475762000346620002c4565b5b6000620003578482850162000317565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e257607f821691505b602082108103620003f857620003f76200039a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004627fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000423565b6200046e868362000423565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004bb620004b5620004af8462000486565b62000490565b62000486565b9050919050565b6000819050919050565b620004d7836200049a565b620004ef620004e682620004c2565b84845462000430565b825550505050565b600090565b62000506620004f7565b62000513818484620004cc565b505050565b5b818110156200053b576200052f600082620004fc565b60018101905062000519565b5050565b601f8211156200058a576200055481620003fe565b6200055f8462000413565b810160208510156200056f578190505b620005876200057e8562000413565b83018262000518565b50505b505050565b600082821c905092915050565b6000620005af600019846008026200058f565b1980831691505092915050565b6000620005ca83836200059c565b9150826002028217905092915050565b620005e58262000360565b67ffffffffffffffff8111156200060157620006006200036b565b5b6200060d8254620003c9565b6200061a8282856200053f565b600060209050601f8311600181146200065257600084156200063d578287015190505b620006498582620005bc565b865550620006b9565b601f1984166200066286620003fe565b60005b828110156200068c5784890151825560018201915060208501945060208101905062000665565b86831015620006ac5784890151620006a8601f8916826200059c565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200070a601f83620006c1565b91506200071782620006d2565b602082019050919050565b600060208201905081810360008301526200073d81620006fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007808262000486565b91506200078d8362000486565b9250828201905080821115620007a857620007a762000744565b5b92915050565b620007b98162000486565b82525050565b6000602082019050620007d66000830184620007ae565b92915050565b61178980620007ec6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610228578063a457c2d714610246578063a9059cbb14610276578063dd62ed3e146102a6576100cf565b806339509351146101aa57806370a08231146101da5780638da5cb5b1461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd146101405780632e1a7d4d14610170578063313ce5671461018c575b600080fd5b6100dc6102d6565b6040516100e99190610ea5565b60405180910390f35b61010c60048036038101906101079190610f60565b610368565b6040516101199190610fbb565b60405180910390f35b61012a61038b565b6040516101379190610fe5565b60405180910390f35b61015a60048036038101906101559190611000565b610395565b6040516101679190610fbb565b60405180910390f35b61018a60048036038101906101859190611053565b6103c4565b005b610194610503565b6040516101a1919061109c565b60405180910390f35b6101c460048036038101906101bf9190610f60565b61050c565b6040516101d19190610fbb565b60405180910390f35b6101f460048036038101906101ef91906110b7565b610543565b6040516102019190610fe5565b60405180910390f35b61021261058b565b60405161021f91906110f3565b60405180910390f35b6102306105b1565b60405161023d9190610ea5565b60405180910390f35b610260600480360381019061025b9190610f60565b610643565b60405161026d9190610fbb565b60405180910390f35b610290600480360381019061028b9190610f60565b6106ba565b60405161029d9190610fbb565b60405180910390f35b6102c060048036038101906102bb919061110e565b61075b565b6040516102cd9190610fe5565b60405180910390f35b6060600380546102e59061117d565b80601f01602080910402602001604051908101604052809291908181526020018280546103119061117d565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b6000806103736107e2565b90506103808185856107ea565b600191505092915050565b6000600254905090565b6000806103a06107e2565b90506103ad8582856109b3565b6103b8858585610a3f565b60019150509392505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044b90611220565b60405180910390fd5b47811115610497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048e9061128c565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104ff573d6000803e3d6000fd5b5050565b60006012905090565b6000806105176107e2565b9050610538818585610529858961075b565b61053391906112db565b6107ea565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546105c09061117d565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec9061117d565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b5050505050905090565b60008061064e6107e2565b9050600061065c828661075b565b9050838110156106a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069890611381565b60405180910390fd5b6106ae82868684036107ea565b60019250505092915050565b60006106c7338484610a3f565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361075157610750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a7640000610cb5565b5b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085090611413565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bf906114a5565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109a69190610fe5565b60405180910390a3505050565b60006109bf848461075b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a395781811015610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2290611511565b60405180910390fd5b610a3884848484036107ea565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa5906115a3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1490611635565b60405180910390fd5b610b28838383610e0b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba5906116c7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c9c9190610fe5565b60405180910390a3610caf848484610e10565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1b90611733565b60405180910390fd5b610d3060008383610e0b565b8060026000828254610d4291906112db565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610df39190610fe5565b60405180910390a3610e0760008383610e10565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e4f578082015181840152602081019050610e34565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e7782610e15565b610e818185610e20565b9350610e91818560208601610e31565b610e9a81610e5b565b840191505092915050565b60006020820190508181036000830152610ebf8184610e6c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ef782610ecc565b9050919050565b610f0781610eec565b8114610f1257600080fd5b50565b600081359050610f2481610efe565b92915050565b6000819050919050565b610f3d81610f2a565b8114610f4857600080fd5b50565b600081359050610f5a81610f34565b92915050565b60008060408385031215610f7757610f76610ec7565b5b6000610f8585828601610f15565b9250506020610f9685828601610f4b565b9150509250929050565b60008115159050919050565b610fb581610fa0565b82525050565b6000602082019050610fd06000830184610fac565b92915050565b610fdf81610f2a565b82525050565b6000602082019050610ffa6000830184610fd6565b92915050565b60008060006060848603121561101957611018610ec7565b5b600061102786828701610f15565b935050602061103886828701610f15565b925050604061104986828701610f4b565b9150509250925092565b60006020828403121561106957611068610ec7565b5b600061107784828501610f4b565b91505092915050565b600060ff82169050919050565b61109681611080565b82525050565b60006020820190506110b1600083018461108d565b92915050565b6000602082840312156110cd576110cc610ec7565b5b60006110db84828501610f15565b91505092915050565b6110ed81610eec565b82525050565b600060208201905061110860008301846110e4565b92915050565b6000806040838503121561112557611124610ec7565b5b600061113385828601610f15565b925050602061114485828601610f15565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061119557607f821691505b6020821081036111a8576111a761114e565b5b50919050565b7f4f6e6c7920746865206f776e65722063616e2077697468647261772066756e6460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061120a602183610e20565b9150611215826111ae565b604082019050919050565b60006020820190508181036000830152611239816111fd565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000611276601483610e20565b915061128182611240565b602082019050919050565b600060208201905081810360008301526112a581611269565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112e682610f2a565b91506112f183610f2a565b9250828201905080821115611309576113086112ac565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061136b602583610e20565b91506113768261130f565b604082019050919050565b6000602082019050818103600083015261139a8161135e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006113fd602483610e20565b9150611408826113a1565b604082019050919050565b6000602082019050818103600083015261142c816113f0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061148f602283610e20565b915061149a82611433565b604082019050919050565b600060208201905081810360008301526114be81611482565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006114fb601d83610e20565b9150611506826114c5565b602082019050919050565b6000602082019050818103600083015261152a816114ee565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061158d602583610e20565b915061159882611531565b604082019050919050565b600060208201905081810360008301526115bc81611580565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061161f602383610e20565b915061162a826115c3565b604082019050919050565b6000602082019050818103600083015261164e81611612565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006116b1602683610e20565b91506116bc82611655565b604082019050919050565b600060208201905081810360008301526116e0816116a4565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061171d601f83610e20565b9150611728826116e7565b602082019050919050565b6000602082019050818103600083015261174c81611710565b905091905056fea2646970667358221220136b71cf6f0e9f7c0e1385bcf9dbcea2b6671eda7b9b30f9dd099f9be6edb70064736f6c63430008130033a26469706673582212208dadd488f73467f5afff8b5053efdd5f0e60748bf87fc5d6ad2cbb1e39336a0364736f6c63430008130033";

type MyContractFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContractFactory__factory extends ContractFactory {
  constructor(...args: MyContractFactoryConstructorParams) {
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
      MyContractFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyContractFactory__factory {
    return super.connect(runner) as MyContractFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractFactoryInterface {
    return new Interface(_abi) as MyContractFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MyContractFactory {
    return new Contract(address, _abi, runner) as unknown as MyContractFactory;
  }
}
