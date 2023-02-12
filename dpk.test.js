const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns trivialKey partitionKey as string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "akash-kr-01-sharma"});
    expect(trivialKey).toBe("akash-kr-01-sharma");
  });

  it("Returns trivialKey when partitionKey present as object ", () => {
    const event = {partitionKey: {name: "akash"}}
    const trivialKey = deterministicPartitionKey(event);
    const MAX_PARTITION_KEY_LENGTH = 256;
    let data = JSON.stringify(event.partitionKey);
    expect(trivialKey).toBe(data);
  });

  it("Returns trivialKey when partitionKey not present as object ", () => {
    const event = { data: { name: 'akash-sharma' }}
    const trivialKey = deterministicPartitionKey(event);
    const MAX_PARTITION_KEY_LENGTH = 256;


    const data = JSON.stringify(event);
    let candidate = crypto.createHash("sha3-512").update(data).digest("hex");

    expect(trivialKey).toBe(candidate);
  });
});
