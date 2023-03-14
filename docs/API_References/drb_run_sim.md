# `drb_run_sim.py`

The code then processes command line arguments to execute a simulation of the Pywr-DRB model.

The command line arguments set the `inflow_type` and `backup_inflow_type` variables. These variables are used to specify the data source and backup data source for the inflow data used in the model. For more informaiton on available inflow data, see LINK.

The code then sets the `start_date` and `end_date` variables to specify the time range for the model. The `model_filename` and `output_filename` variables are set to specify the names and locations of the input and output files.

The code then imports some custom parameters for the model and generates a JSON file with model data using the `drb_make_model` function. The model is then loaded from the JSON file using the `Model.load` method.

A `TablesRecorder` is added to the model to record the results of the model run to an output file specified by the `output_filename` variable. Finally, the model is run and the resulting statistics are converted to a pandas DataFrame.
