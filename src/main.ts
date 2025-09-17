import { create, fromJson, toJson, equals } from "@bufbuild/protobuf";
import { DurationSchema } from "@bufbuild/protobuf/wkt";
import { ScheduleSchema } from "../gen/proto/schedule_pb.js";

// 1. Convert DurationJson to Duration
const durationJson: string = "30.0000005s";
const duration = fromJson(DurationSchema, durationJson);
console.log("Converted DurationJson to Duration:", duration);

// 2. Convert Duration to DurationJson
const backToJson = toJson(DurationSchema, duration);
console.log("Converted Duration to DurationJson:", backToJson);

// 3. Create a Schedule message
const originalSchedule = create(ScheduleSchema, {
    delay: duration,
});
console.log("Original Schedule:", originalSchedule);

// 4. Serialize Schedule to JSON
const scheduleJson = toJson(ScheduleSchema, originalSchedule);
console.log("Serialized Schedule to JSON:", JSON.stringify(scheduleJson));

// 5. Deserialize Schedule from JSON
const deserializedSchedule = fromJson(ScheduleSchema, scheduleJson);
console.log("Deserialized Schedule:", deserializedSchedule);

// 6. Compare original and deserialized Schedule
const areEqual = equals(ScheduleSchema, originalSchedule, deserializedSchedule);
console.log(`Are the original and deserialized Schedule equal? ${areEqual ? "✅ Yes" : "❌ No"}`);
