# Function References
```{tableofcontents}
```

## `drb_make_model.py`

### `add_major_node(model, name, node_type, inflow_type, backup_inflow_type=None, outflow_type=None, downstream_node=None, initial_volume=None, initial_volume_perc=None, variable_cost=None)`

Add a major node to the model. Major nodes types include reservoir & river. This function will add the major node and all standard minor nodes that belong to each major node ( i.e., catchment, withdrawal, consumption, outflow), along with their standard parameters and edges. All nodes, edges, and parameters are added to the model dict, which is then returned.

Parameters:
-   `model` (dict): the dict holding all model elements, which will be written to JSON file at completion.
-   `name` (str): name of major node
-   `node_type` (str): type of major node - either 'reservoir' or 'river'
-   `inflow_type` (str): 'nhmv10', etc
-   `backup_inflow_type` (str): 'nhmv10', etc. only active if inflow_type is a WEAP series - backup used to fill inflows for non-WEAP reservoirs.
-   `outflow_type` (str): define what type of outflow node to use (if any) - either 'starfit' or 'regulatory'
-   `downstream_node` (str): name of node directly downstream, for writing edge network.
-   `initial_volume` (float): (reservoirs only) starting volume of reservoir in MG. Must correspond to "initial_volume_perc" times total volume, as pywr doesnt calculate this automatically in time step 0.
-   `initial_volume_perc` (float): (reservoirs only) fraction full for reservoir initially (note this is fraction, not percent, a confusing pywr convention)
-   `variable_cost` (bool): (reservoirs only) If False, cost is fixed throughout simulation. If True, it varies according to state-dependent parameter.

Returns:
-   `model` (dict): the updated model dict, with all nodes, edges, and parameters added.


### `drb_make_model(inflow_type, backup_inflow_type, start_date, end_date, use_hist_NycNjDeliveries=True)`

This function creates the JSON file used by Pywr to define the model. This includes all nodes, edges, and parameters.

Parameters
-   `inflow_type`: the type of inflow - i.e., 'nhmv10', etc
-   `backup_inflow_type`: backup inflow type - i.e., 'nhmv10', etc. Only active if `inflow_type` is a WEAP series. Backup is used to fill inflows for non-WEAP reservoirs.
-   `start_date`: start date of the simulation
-   `end_date`: end date of the simulation
-   `use_hist_NycNjDeliveries`: boolean indicating whether to use historical NYC/NJ deliveries data or not. Default is `True`.

Returns
- None


### `create_starfit_params()`

This function `create_starfit_params` takes two arguments `d` which is a dictionary of parameters and `r` which is a string representing the name of a reservoir. The function generates and stores relevant parameters associated with simulating the behavior of a reservoir using the STARFIT rule type in the input dictionary.

The function first initializes two boolean variables `starfit_remove_Rmax` and `starfit_linear_below_NOR` to `True`. Then it proceeds to generate various constant parameters associated with the STARFIT rule type for the input reservoir. Each parameter has a unique key in the dictionary `d`.

Next, the function generates a list of aggregated parameters. Each aggregated parameter is generated using a function (sum, max, product) applied to a list of constant or other aggregated parameters. These aggregated parameters also have unique keys in the dictionary `d`.

The function conditionally generates two additional aggregated parameters based on the values of `starfit_linear_below_NOR` and `starfit_remove_Rmax`. If `starfit_linear_below_NOR` is `False`, an aggregated parameter called `belowNOR_final` is generated using the `Release_min_final` parameter. If `starfit_remove_Rmax` is `False`, an aggregated parameter called `neg_NORhi_final_unnorm` is generated using the `NORhi_final` parameter.

The final dictionary of parameters `d` is returned.

***
## `prep_input_data.py`

### `read_modeled_estimates(filename, sep, date_label, site_label, streamflow_label, start_date, end_date)`

This function reads in streamflow data from modeled NHM/NWM estimates, preps the data for use in Pywr, and returns a dataframe.
-   `filename`: the name of the file containing the data to be read.
-   `sep`: the delimiter used to separate values in the file.
-   `date_label`: the label used to identify the date column in the file.
-   `site_label`: the label used to identify the site column in the file.
-   `streamflow_label`: the label used to identify the streamflow column in the file.
-   `start_date`: the start date for the data to be included.
-   `end_date`: the end date for the data to be included.

The function first reads in the data from the specified file and filters it based on the start and end dates. It then restructures the data to have gages as columns, and converts the streamflow values from cubic meters per second (cms) to million gallons per day (mgd).
The function returns a dataframe with the restructured data.

### match_gages()
This is a function written in Python for matching USGS gage sites to nodes in Pywr-DRB and handling cases where the gage is located downstream of a reservoir or other nodes. It takes as input a pandas dataframe `df` containing the USGS gage data, a string `dataset_label` to label the output file, and a boolean `use_pub` that determines whether to use additional modeled gage data. The function returns a pandas dataframe whose columns are the names of Pywr-DRB nodes.

The function first reads in additional modeled gage data if `use_pub` is True. Then, it defines a dictionary `site_matches_reservoir` that matches gages to reservoir catchments and a list of lists `site_matches_link` containing mainstem nodes, matching USGS gages, and upstream nodes to subtract.

For each site, the function determines whether it is a reservoir or not based on the site name. If the site is a reservoir, the matched gage is downstream, so the function assumes that the flow into the reservoir comes from the upstream catchment. If the site is not a reservoir, the function subtracts upstream reservoir inflows from the flow at the mainstem USGS gage.

The function saves the resulting dataframe as a CSV file and returns it.

***
## `custom_pywr.py`

This code defines a class called `FfmpNycRunningAvgParameter` which inherits from the `Parameter` class.

The `__init__` method takes in several arguments:

-   `model`: an instance of a model
-   `node`: a node object
-   `max_avg_delivery`: a parameter object that represents the maximum average delivery

In the `setup` method, an empty array is created to hold the parameter state. The size of this array is the number of scenarios in the model.

The `reset` method sets the initial value of the parameter, calculates the timestep and datetime, and sets the max_delivery array to the max_avg_delivery multiplied by the timestep.

The `value` method returns the current volume remaining for the scenario.

The `after` method updates the max_delivery array based on the current datetime. If the current date is May 31st, the max_delivery array is reset to the max_avg_delivery multiplied by the timestep. If it is not May 31st, the max_delivery array is updated based on the running average formula: maxdel_t = maxdel_{t-1} - flow_{t-1} + max_avg_del. The max_delivery array is also updated to ensure that it cannot be less than zero. The datetime is also updated for the next day.

The `load` method is a class method that takes in the model, data, and loads the parameter object with the data passed in.
