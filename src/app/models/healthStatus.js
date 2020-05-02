const healthStatusModel = mongoose => {
  const { SchemaTypes, Schema } = mongoose;
  const { String, Date, ObjectId } = SchemaTypes;

  const healthStatusSchema = new Schema({
    ownerId: { type: ObjectId, ref: 'User' },
    status: String,
    diseases: [{ type: ObjectId, ref: 'Disease' }],
    diseaseHistory: [{ type: ObjectId, ref: 'Disease' }],
    epidemics: [{ type: ObjectId, ref: 'Disease' }],
    epidemicHistory: [{ type: ObjectId, ref: 'Disease' }],
    pandemics: [{ type: ObjectId, ref: 'Disease' }],
    pandemicHistory: [{ type: ObjectId, ref: 'Disease' }],
    emergency_problem: { type: ObjectId, ref: 'Disease' },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  return mongoose.model('HealthStatus', healthStatusSchema);
};

module.exports = healthStatusModel;
