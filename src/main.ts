import { Duration } from "@bufbuild/protobuf";
import { Schedule } from "../gen/proto/schedule_pb.js";

// 1. Initialize the original message
console.log("## 1. Initializing Original Message ##");
const originalSchedule = new Schedule({
    delay: new Duration({
        seconds: 30n,
        nanos: 500,
    }),
});
console.log(`Original Message: delay is ${originalSchedule.delay?.seconds}s and ${originalSchedule.delay?.nanos}ns`);
console.log("---");

// 2. Serialize the message to a JSON object
console.log("## 2. Serializing to JSON ##");
const jsonObject = originalSchedule.toJson();
console.log("Serialized JSON Object:", JSON.stringify(jsonObject));
console.log("---");

// 3. Deserialize the JSON object back into a message
console.log("## 3. Deserializing from JSON ##");
const deserializedSchedule = Schedule.fromJson(jsonObject);
console.log(`Deserialized Message: delay is ${deserializedSchedule.delay?.seconds}s and ${deserializedSchedule.delay?.nanos}ns`);
console.log("---");

// 4. Compare the pre-serialization and post-serialization objects
console.log("## 4. Comparing Messages ##");
const areEqual = Schedule.equals(originalSchedule, deserializedSchedule);

console.log(`Are the original and deserialized messages equal? ${areEqual ? '✅ Yes' : '❌ No'}`);
if (areEqual) {
    console.log("Success: The message was serialized and deserialized correctly.");
} else {
    console.error("Failure: The messages do not match after the serialization cycle.");
}
