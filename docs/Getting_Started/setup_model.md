# Setup Model

## Accessing Pywr-DRB

Begin by copying or downloading the project repository from GitHub, available [here](https://github.com/ahamilton144/DRB_water_management).

To clone a copy of the repository to your local machine, run the following command:

```
git clone https://github.com/DRB_water_managment
```

The folder contains the following content, see the [References](../../API_References/api_references.md) for detail on component modules and functions:

```Bash
DRB_water_management/
├── DRB_spatial/
├── input_data/
│   ├── modeled_gages/
│   ├── usgs_gages/
│   └── WEAP_gridmet/
├── model_data/
├── output_data/
├── figs/
├── prep_input_data.py
├── custom_pywr.py
├── drb_make_figs.py
├── drb_make_model.py
├── drb_run_sim.py
├── drb_run_all.sh        
├── README.md
└── requirements.txt
```


## Dependencies

This project requires several dependencies, listed in [`requirements.txt`](https://github.com/DRB_water_managment/requirements.txt), including:
- pywr
- glob2
- h5py
- hydroeval

You can install all of the necessary dependencies in a virtual environment:

```Bash
cd <your_local_directory>\DRB_water_management
python3 -m virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Quck


## Executables

`prep_input_data.py`
> This module prepares input-streamflow data files from different potential sources, and saves data in Pywr-ready formats. Sources include observed streamflows, modeled flows from NHMv1.0, NWMv2.1, and WEAP (Aug 23, 2022, version).

`drb_run_sim.py`
> This module is used to execute a simulation of the Pywr-DRB model using a specified streamflow input source, generated by `prep_input_data.py`. The model features (nodes and edges) contained within the `DRB_water_management/model_data/` directory, and are passed to `drb_make_model.py` which constructs a JSON file defining the Pywr model. Once the model is constructed, the simulation is run.

`drb_make_figs.py`
> This module contains several plotting functions. Executing this script after performing a simulation will result in figures being generated and stored in `DRB_water_managment/figs/`.

`drb_run_all.sh`
> This bash script executes each of the three modules above in sequence. Additionally, simulations are run for all available inflow data types.