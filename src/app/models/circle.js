const circleModel = mongoose => {
  const { SchemaTypes, Schema } = mongoose;
  const { Date, ObjectId } = SchemaTypes;

  const circleSchema = new Schema({
    ownerId: { type: ObjectId, ref: 'User' },
    members: [{ type: ObjectId, ref: 'User' }],
    created: { type: SchemaTypes.Date, default: Date.now },
    updated: { type: SchemaTypes.Date, default: Date.now }
  });

  return mongoose.model('Circle', circleSchema);
};

module.exports = circleModel;
