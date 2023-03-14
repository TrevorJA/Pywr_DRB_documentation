# Summary of data

## Model data requirements

The Pywr-DRB model is designed to receive streamflow timeseries at 18 upstream catchments and 3 mainstem locations as inputs.

## Data sources

Four alternative streamflow records are available for simulation, including:
1. Reconstructed historic record
> A combination of historic streamflow observations from USGS gauge stations and predictions of streamflow at ungauged locations. For more detail on ungauged predictions, see [Supplemental: Streamflow Prediction in Ungauged Basins.](./pub.html)

2. [National Water Model (NWM)](https://water.noaa.gov/about/nwm#:~:text=The%20National%20Water%20Model%20(NWM,and%20how%20they%20fit%20together.)
>The NWM is a forecasting system developed by the National Oceanic and Atmospheric Administration (NOAA) that predicts water availability, movement, and flooding across the United States.

3. [National Hydrologic Model (NHM)](https://www.sciencebase.gov/catalog/item/4f4e4773e4b07f02db47e234)
>The NHM is a hydrological model developed by the US Geological Survey (USGS) that simulates water movement and availability across the United States.

4. [Water Evaluation and Planning System (WEAP)](https://www.weap21.org/) Streamflows
>Streamflows throughout the basin are generated within a [WEAP model](https://www.weap21.org/index.asp) model of the basin. These streamflows have been gathered from the model and are available as comparative inputs.  

## Data Availability

Streamflow data needed to run the Pywr-DRB model is available in the [`input_data/` folder within the project repository.](https://github.com/ahamilton144/DRB_water_management/tree/master/input_data)
