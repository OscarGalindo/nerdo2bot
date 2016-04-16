# Version
 * brew install icu4c
 * brew link icu4c --force
 * node: 5.6.0
 * npm: 3.6.0
 * tsc: 1.8.10
 * tsd: 0.6.5
 
# Run
 * npm install
 * Remove reference to node-0.10.d.ts from tsd.d.ts
 * Edit reference to node-0.10.d.ts to node.d.ts from irc/irc.d.ts
 * node build/bundle.js