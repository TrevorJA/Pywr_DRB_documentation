# Visualize Streamflows

The figures below provide for interactive visualization of the Pywr-DRB simulated streamflow timeseries at Trenton resulting from different inflow datasets. Click on the tabs above the figure to change the dataset being shown.

````{tab-set}
```{tab-item} Observed
:sync: key_obs_pub

Below is an interactive visualization of the simulated streamflow at Trenton, using the historic reconstruction (`obs_pub`) dataset.

Simulated streamflow at Trenton is decomposed into the streamflow from each of the upstream nodes in the model, and color-coded based on how much of the total flow at Trenton came from that location.

Click on one of the names in the **Source** legend to highlight the contribution from that specific node.

Zoom in on the figure to look more closely at a specific time period.

<iframe id="serviceFrameSend" src="../../_images/obs_pub_streamflow_stack_absolute.html" height = "300" width = "600" title = "Absolute flow contributions at Trenton"></iframe>

```

```{tab-item} NHMv10
:sync: key_nhmv10

Below is an interactive visualization of the simulated streamflow at Trenton, using the NHMv10 (`nhmv10`) dataset.

Simulated streamflow at Trenton is decomposed into the streamflow from each of the upstream nodes in the model, and color-coded based on how much of the total flow at Trenton came from that location.

Click on one of the names in the **Source** legend to highlight the contribution from that specific node.

Zoom in on the figure to look more closely at a specific time period.

<iframe id="serviceFrameSend" src="../../_images/nhmv10_streamflow_stack_absolute.html" height = "500" width = "800" title = "Absolute flow contributions at Trenton"></iframe>

```
````


#### Percentage flow contributions at Trenton

<iframe id="serviceFrameSend" src="../../_images/obs_pub_streamflow_stack_percent.html" height = "500" width = "800" title = "Percentage flow contributions at Trenton"></iframe>


#### Percentage flow contributions at Trenton
<iframe id="serviceFrameSend" src="../../_images/nhmv10_streamflow_stack_percent.html" height = "500" width = "800" title = "Percentage flow contributions at Trenton"></iframe>
