const userModel = mongoose => {
  const { SchemaTypes, Schema } = mongoose;
  const { String, Boolean, Date, Number } = SchemaTypes;

  const userSchema = new Schema({
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    age: Number,
    phone: String,
    city: String,
    state: String,
    country: String,
    countryCode: String,
    postcode: String,
    dob_day: Number,
    dob_month: String,
    dob_year: String,
    isHealthy: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  return mongoose.model('User', userSchema);
};

module.exports = userModel;
