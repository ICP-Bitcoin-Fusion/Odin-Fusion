// use crate::{bitcoin_api, ecdsa_api};
// use bitcoin::{
//     consensus::serialize,
//     hashes::Hash,
//     script::{Builder, PushBytesBuf},
//     sighash::{EcdsaSighashType, SighashCache},
//     Address, AddressType, PublicKey, Transaction, Txid,
// };
// use ic_cdk::api::management_canister::bitcoin::{
//     BitcoinNetwork, MillisatoshiPerByte, Satoshi, Utxo,
// };
// use ic_cdk::print;
// use std::convert::TryFrom;
// use std::str::FromStr;

// use super::common::transform_network;



// pub async fn get_p2pkh_address(   /// this returns the P2PKH address of this canister at the given derivation path.
//     network: BitcoinNetwork,
//     key_name: String,
//     derivation_path: Vec<Vec<u8>>,
// ) -> String {
//     // Fetch the public key of the given derivation path.
//     let public_key = ecdsa_api::ecdsa_public_key(key_name, derivation_path).await;

//     // Compute the address.
//     public_key_to_p2pkh_address(network, &public_key)
// }

// // Converts a public key to a P2PKH address.
// fn public_key_to_p2pkh_address(network: BitcoinNetwork, public_key: &[u8]) -> String {
//     Address::p2pkh(
//         &PublicKey::from_slice(public_key).expect("failed to parse public key"),
//         transform_network(network),
//     )
//     .to_string()
// }

