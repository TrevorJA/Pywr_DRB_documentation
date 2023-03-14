# `drb_make_model.py`

## `add_major_node(model, name, node_type, inflow_type, backup_inflow_type=None, outflow_type=None, downstream_node=None, initial_volume=None, initial_volume_perc=None, variable_cost=None)`

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


***
## `drb_make_model(inflow_type, backup_inflow_type, start_date, end_date, use_hist_NycNjDeliveries=True)`

This function creates the JSON file used by Pywr to define the model. This includes all nodes, edges, and parameters.

Parameters
-   `inflow_type`: the type of inflow - i.e., 'nhmv10', etc
-   `backup_inflow_type`: backup inflow type - i.e., 'nhmv10', etc. Only active if `inflow_type` is a WEAP series. Backup is used to fill inflows for non-WEAP reservoirs.
-   `start_date`: start date of the simulation
-   `end_date`: end date of the simulation
-   `use_hist_NycNjDeliveries`: boolean indicating whether to use historical NYC/NJ deliveries data or not. Default is `True`.

Returns
- None

***
## `create_starfit_params()`

This function `create_starfit_params` takes two arguments `d` which is a dictionary of parameters and `r` which is a string representing the name of a reservoir. The function generates and stores relevant parameters associated with simulating the behavior of a reservoir using the STARFIT rule type in the input dictionary.

The function first initializes two boolean variables `starfit_remove_Rmax` and `starfit_linear_below_NOR` to `True`. Then it proceeds to generate various constant parameters associated with the STARFIT rule type for the input reservoir. Each parameter has a unique key in the dictionary `d`.

Next, the function generates a list of aggregated parameters. Each aggregated parameter is generated using a function (sum, max, product) applied to a list of constant or other aggregated parameters. These aggregated parameters also have unique keys in the dictionary `d`.

The function conditionally generates two additional aggregated parameters based on the values of `starfit_linear_below_NOR` and `starfit_remove_Rmax`. If `starfit_linear_below_NOR` is `False`, an aggregated parameter called `belowNOR_final` is generated using the `Release_min_final` parameter. If `starfit_remove_Rmax` is `False`, an aggregated parameter called `neg_NORhi_final_unnorm` is generated using the `NORhi_final` parameter.

The final dictionary of parameters `d` is returned.
