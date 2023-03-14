# `prep_input_data.py`

## `read_modeled_estimates(filename, sep, date_label, site_label, streamflow_label, start_date, end_date)`

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

## `match_gages()``
This is a function written in Python for matching USGS gage sites to nodes in Pywr-DRB and handling cases where the gage is located downstream of a reservoir or other nodes. It takes as input a pandas dataframe `df` containing the USGS gage data, a string `dataset_label` to label the output file, and a boolean `use_pub` that determines whether to use additional modeled gage data. The function returns a pandas dataframe whose columns are the names of Pywr-DRB nodes.

The function first reads in additional modeled gage data if `use_pub` is True. Then, it defines a dictionary `site_matches_reservoir` that matches gages to reservoir catchments and a list of lists `site_matches_link` containing mainstem nodes, matching USGS gages, and upstream nodes to subtract.

For each site, the function determines whether it is a reservoir or not based on the site name. If the site is a reservoir, the matched gage is downstream, so the function assumes that the flow into the reservoir comes from the upstream catchment. If the site is not a reservoir, the function subtracts upstream reservoir inflows from the flow at the mainstem USGS gage.

The function saves the resulting dataframe as a CSV file and returns it.
