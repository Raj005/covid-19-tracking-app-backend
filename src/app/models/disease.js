const diseaseModel = mongoose => {
  const { SchemaTypes, Schema } = mongoose;
  const { String, Date, Boolean } = SchemaTypes;

  const diseaseSchema = new Schema({
    name: { type: String, required: true },
    code: String,
    type: String,
    symptoms: [String],
    isCurable: { type: Boolean, default: true },
    isTreatable: { type: Boolean, default: true },
    isEpidemic: { type: Boolean, default: false },
    isPandemic: { type: Boolean, default: false },
    created: { type: SchemaTypes.Date, default: Date.now },
    updated: { type: SchemaTypes.Date, default: Date.now }
  });

  return mongoose.model('Disease', diseaseSchema);
};

module.exports = diseaseModel;
