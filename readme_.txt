cd /home/dev/www/farm_swap/ens/ens-app
yarn start

================================================================================
Setting up subgraph
Subgraph is used to list subdomains and all the names you have registered.

Prerequisite
Get ens subgraph

git clone https://github.com/ggbbest/ens-subgraph
cd ens-subgraph
yarn
Get graph-node
================================================================================
git clone https://github.com/ggbbest/graph-node
From now on, we assume that graph-node, ens-app, and ens-subgraph all exist under the same directory
================================================================================

dev@ubuntu:~/www/farm_swap/ens/ens-contracts$ npx hardhat run --network c4ei scripts/wrapper/deploy.js
(node:16865) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
(Use `node --trace-deprecation ...` to show where the warning was created)
Deploying contracts to c4ei with the account:0xAd70df6Bd78734721F42CD8cCACe42b25D83Aa65
Account balance: 83066749711007954185613854067521536 true
{
  registryAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  registrarAddress: '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'
}
Setting metadata service to https:///name/0x{id}
Metadata address: 0x4d03451936DE995d1c753dff33D36fA3432EE138
Wrapper address: 0x730b95ef01503cf1e1335BEf6b6062a45123975e
Resolver address: 0x6c782810bA5a57Ae5390bB4578198210EC70841c
wait for 5 sec until bytecodes are uploaded into etherscan
verify  0x4d03451936DE995d1c753dff33D36fA3432EE138 with arguments https:///name/0x{id}
verify  0x730b95ef01503cf1e1335BEf6b6062a45123975e with arguments 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e,0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85,0x4d03451936DE995d1c753dff33D36fA3432EE138
verify  0x6c782810bA5a57Ae5390bB4578198210EC70841c with arguments 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e,0x730b95ef01503cf1e1335BEf6b6062a45123975e
dev@ubuntu:~/www/farm_swap/ens/ens-contracts$ 
================================================================================
/home/dev/www/farm_swap/ens/graph-node/docker/docker-compose.yml
[21 line]--> ethereum: 'mainnet:https://rpc.c4ei.net'
================================================================================
cd /home/dev/www/farm_swap/ens/graph-node/docker
docker-compose up

http://192.168.1.185:21004

cd ens-subgraph
yarn codegen
yarn create-local
yarn deploy-local
================================================================================
Build completed: QmYbUu3ZfmrK8ugavLFEnz2hHHiEUx22ya3SwqwBe8HuKQ
Deployed to http://127.0.0.1:8000/subgraphs/name/graphprotocol/ens/graphql
Subgraph endpoints:
Queries (HTTP):     http://127.0.0.1:8000/subgraphs/name/graphprotocol/ens
Subscriptions (WS): http://127.0.0.1:8001/subgraphs/name/graphprotocol/ens
================================================================================

cd /home/dev/www/ens/ens-app/
yarn start:ipfs
