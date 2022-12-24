require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note outside coast grace loan flush genius'; 
let testAccounts = [
"0x96de6f5a102733c77abe1d64288a9b7bc73883c21a84473af98fab1eb72867b3",
"0x5883199bb7007eafdcd3aa805b3220ec69dc5d414f0b41ae813dcbc1159c153c",
"0xe025991b2b37236733ada1cf92c4946b871d23f665295d58c006ed8143884a51",
"0x7a23de1c9c0eee1c2f6d5d8c653904ad3e04fa2b9d7ac6d66f86c3c9fee4f5d3",
"0x1f00eb57e3ecc84bc90f0730bc87613de5dec9dd5e5df9b8a66c23422fe89fa8",
"0x875eb079f5de4080fbf4253069d79a5b79a3001ec5062ff86f163656ee0b29e9",
"0x23bba731d7187263ed3662de3d6db2558157a0c6351f5c46689b7d88e75f4fef",
"0x2a838fdf722dabbb0675709514c8e03055b5b59633c8568335bc90f25f83bb55",
"0xc5d2bbf2e8a262a3c6dd37acd6eacaa0edaf65dc5eed0aa40f529687373f645b",
"0x506d83d66f4a8ad78aff079f972c11094f7738b6acb2aac6e9779d7cff3fd29a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

