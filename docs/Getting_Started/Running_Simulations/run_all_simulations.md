# Running model simulations

## Executing the model

The model is run by calling the `drb.py` file from the command line, with the `run` call.  Example:
```BASH
cd <model base directory>
python drb.py run
```

>[!note] Note:
>You may receive warnings that the `drb_output.hdf5` output file could not be updated while running the model. Ignore this until the model has completed its run.  See additional troubleshooting if the `drb_output.hdf5` is not updated once the model has completed its run.


## Run all simulations

To run the Pywr-DRB model using all available streamflow inputs (Historic Reconstruction, NHM, NWM, and WEAP) run the following command:
```bash
bash drb_run_all.sh
```

Results will be stored in the `output_data/` folder.

## Run simulation of historic conditions



## Generate figures

```bash
python3 drb_make_figs.py
```

### Output figures

#### Summary statistic radial plot
