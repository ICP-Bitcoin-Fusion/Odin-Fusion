import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Cycles "mo:base/ExperimentalCycles";
import Error "mo:base/Error";
import Array "mo:base/Array";
import Nat8 "mo:base/Nat8";
import Nat64 "mo:base/Nat64";
import Text "mo:base/Text";

import Types "Types";

actor {

    public query func transform(raw : Types.TransformArgs) : async Types.CanisterHttpResponsePayload {
      let transformed : Types.CanisterHttpResponsePayload = {
          status = raw.response.status;
          body = raw.response.body;
          headers = [
              {
                  name = "Content-Security-Policy";
                  value = "default-src 'self'";
              },
              { name = "Referrer-Policy"; value = "strict-origin" },
              { name = "Permissions-Policy"; value = "geolocation=(self)" },
              {
                  name = "Strict-Transport-Security";
                  value = "max-age=63072000";
              },
              { name = "X-Frame-Options"; value = "DENY" },
              { name = "X-Content-Type-Options"; value = "nosniff" },
          ];
      };
      transformed;
  };


  public func get_icp_usd_exchange() : async Text {

    let ic : Types.IC = actor ("aaaaa-aa");
    let ONE_MINUTE : Nat64 = 60;
    let start_timestamp : Types.Timestamp = 1682978460; 
    let end_timestamp : Types.Timestamp = 1682978520;
    let host : Text = "api.pro.coinbase.com";
    let url = "https://" # host # "/products/ICP-USD/candles?start=" # Nat64.toText(start_timestamp) # "&end=" # Nat64.toText(end_timestamp) # "&granularity=" # Nat64.toText(ONE_MINUTE);


    let request_headers = [
        { name = "Host"; value = host # ":443" },
        { name = "User-Agent"; value = "exchange_rate_canister" },
    ];


    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    let http_request : Types.HttpRequestArgs = {
        url = url;
        max_response_bytes = null; 
        headers = request_headers;
        body = null; 
        method = #get;
        transform = ?transform_context;
    };

    Cycles.add(20_949_972_000);

    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);
    let response_body: Blob = Blob.fromArray(http_response.body);
    let decoded_text: Text = switch (Text.decodeUtf8(response_body)) {
        case (null) { "No value returned" };
        case (?y) { y };
    };

    decoded_text
  };

  public query func transformFetch(raw : Types.TransformArgs) : async Types.CanisterHttpResponsePayload {
        let transformed : Types.CanisterHttpResponsePayload = {
            status = raw.response.status;
            body = raw.response.body;
            headers = [
                { name = "Content-Security-Policy"; value = "default-src 'self'" },
                { name = "Referrer-Policy"; value = "strict-origin" },
                { name = "Permissions-Policy"; value = "geolocation=(self)" },
                { name = "Strict-Transport-Security"; value = "max-age=63072000" },
                { name = "X-Frame-Options"; value = "DENY" },
                { name = "X-Content-Type-Options"; value = "nosniff" },
            ];
        };
        transformed;
    };

    public func get_crypto_prices() : async [Text] {
        let ic : Types.IC = actor ("aaaaa-aa");
        let ONE_MINUTE : Nat64 = 60;
        let start_timestamp : Types.Timestamp = 1682978460;
        let end_timestamp : Types.Timestamp = 1682978520;
        let host : Text = "api.pro.coinbase.com";

        // List of cryptocurrencies to query
        let cryptos : [Text] = ["ICP-USD", "BTC-USD", "ETH-USD", "ADA-USD", "DOT-USD", "SOL-USD", "XRP-USD", "DOGE-USD", "LTC-USD", "BNB-USD"];

        let requests = cryptos.map<Text>(func (crypto : Text) : async Text {
            let url = "https://" # host # "/products/" # crypto # "/candles?start=" 
                      # Nat64.toText(start_timestamp) # "&end=" 
                      # Nat64.toText(end_timestamp) # "&granularity=" 
                      # Nat64.toText(ONE_MINUTE);

            let request_headers = [
                { name = "Host"; value = host # ":443" },
                { name = "User-Agent"; value = "exchange_rate_canister" },
            ];

            let transform_context : Types.TransformContext = {
                function = transform;
                context = Blob.fromArray([]);
            };

            let http_request : Types.HttpRequestArgs = {
                url = url;
                max_response_bytes = null;
                headers = request_headers;
                body = null;
                method = #get;
                transform = ?transform_context;
            };

            Cycles.add(20_949_972_000);

            let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);
            let response_body : Blob = Blob.fromArray(http_response.body);
            switch (Text.decodeUtf8(response_body)) {
                case (null) { "No value returned for " # crypto };
                case (?decoded_text) { crypto # ": " # decoded_text };
            }
        });

        await Array.sequence(requests); // Await all requests to return their results
    };

};