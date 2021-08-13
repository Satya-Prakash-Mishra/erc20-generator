export default {
  data () {
    return {
      tokenDetails: [
        {
          name: 'SimpleERC20',
          version: '4.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: 'Fixed',
          accessType: 'None',
          transferType: 'Unstoppable',
          mintable: false,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: false,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'StandardERC20',
          version: '4.0.1',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'None',
          transferType: 'Unstoppable',
          mintable: false,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'BurnableERC20',
          version: '4.2.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'None',
          transferType: 'Unstoppable',
          mintable: false,
          burnable: true,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'MintableERC20',
          version: '4.5.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          transferType: 'Unstoppable',
          mintable: true,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'PausableERC20',
          version: '4.6.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          transferType: 'Pausable',
          mintable: false,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'CommonERC20',
          version: '4.0.1',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          transferType: 'Unstoppable',
          mintable: true,
          burnable: true,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'UnlimitedERC20',
          version: '4.4.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Unlimited',
          accessType: 'Role Based',
          transferType: 'Unstoppable',
          mintable: true,
          burnable: true,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'AmazingERC20',
          version: '4.4.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Unlimited',
          accessType: 'Ownable',
          transferType: 'Unstoppable',
          mintable: true,
          burnable: true,
          erc1363: true,
          tokenRecover: true,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
        {
          name: 'PowerfulERC20',
          version: '4.3.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Role Based',
          transferType: 'Unstoppable',
          mintable: true,
          burnable: true,
          erc1363: true,
          tokenRecover: true,
          removeCopyright: true,
          originalPrice: 0,
          price: 0,
          gas: 942275,
        },
      ],
    };
  },
};
