require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember unveil harvest beach bubble sweet'; 
let testAccounts = [
"0x8117b28346d47a0be1631df1c33e3e8e320d63fac2902bf8591ddc8c1c1e8a43",
"0xdb292dadaa9b36130ba6710a92875c02cc9199612fd4553ecd388b5f75dbc2d3",
"0x65ec3a668a6dbc890f941e73a0639bdedadbc369e08b6b7b94077c356daa0966",
"0x30a4a2db816c5aec8d7cc998bcbc487cc066d42d111638d44f19b4f395e293ee",
"0x32d525b0bcef9e7f06d85c21a297c751786093c0d1699299e039759f9f2bb9f8",
"0x2572628424fb7b8533c2871f5884b0dc1bb3422625bc20c465ed7d3881572f00",
"0x12ff03430204e83716c52f39a30b6e43e845d95cc2306028c930969a898eabb2",
"0xafb683bcfb03fe91988831dfc741141ffc7d45c588bb410887c6d97e30fb8b0e",
"0x746d2e8952025642f2169f6f30b38098be94f2ff3c4b6ea7fec9f6e825fdd2bc",
"0xe0cc99323b40ed4d1de87b0ce4000c7fc14115f22704a54dfba3c8ecd26e80f8"
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

