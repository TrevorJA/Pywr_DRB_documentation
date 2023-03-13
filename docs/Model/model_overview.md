# Model Overview

Pywr-DRB is an integrated water resource model of the Delaware River Basin (DRB) designed to assist in water resource decision making within the basin.

The model is build using [Pywr](https://pywr.github.io/pywr/index.html), a opensource Python package for constructing resource allocation models.

A graphical representation of the modeled water network is shown below:

<iframe src="drb_model_map.html" height = "500" width = "800"></iframe>


## Model Goals

The Pywr-DRB model was constructed with the following goals:

1. Accurately represent water management policy across the DRB
2. Allow for simulation of historic and future water supply conditions


## Model design

The Pywr-DRB model is designed to recieve streamflow timeseries at 18 upstream catchments and 3 mainstem locations as inputs. The model simulates and outputs water supply deliveries, reservoir releases and storage levels, and streamflow volumes throughout the basin on a daily timestep.

### Represented components

The Pywr-DRB model includes representation of the following:

- Historic and future streamflow throughout the basin
- Distributed water deliveries within the basin
- Water deliveries to NYC and NJ
- Reservoirs across the basin
- Regulation governing reservoir operations

### Water supply allocation




## Resources:

USGS Visualization Narratives of the DRB:
- [*Water Management and Science in the DRB*](https://labs.waterdata.usgs.gov/visualizations/delaware-basin-story/index.html#/)
- [*How We **Monitor** Stream Temperature in the DRB*](https://labs.waterdata.usgs.gov/visualizations/temperature-prediction/index.html#/monitoring)
- [*How We **Model** Stream Temperature in the DRB*](https://labs.waterdata.usgs.gov/visualizations/temperature-prediction/index.html#/modeling)
