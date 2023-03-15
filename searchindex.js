Search.setIndex({"docnames": ["API_References/api_references", "API_References/custom_pywr", "API_References/drb_make_model", "API_References/drb_run_all", "API_References/drb_run_sim", "API_References/prep_input_data", "Getting_Started/Interpret_Results/interpret_results", "Getting_Started/Interpret_Results/model_outputs", "Getting_Started/Interpret_Results/output_figures", "Getting_Started/Running_Simulations/run_all_simulations", "Getting_Started/Running_Simulations/run_historic_simulation", "Getting_Started/Running_Simulations/running_simulations", "Getting_Started/getting_started", "Getting_Started/setup_model", "Overview/DRB/drb_history", "Overview/DRB/drb_hydrology", "Overview/DRB/drb_overview", "Overview/DRB/drb_planning_management", "Overview/Model/pywr_drb_overview", "Overview/overview", "Supplemental/data_summary", "Supplemental/pub", "Supplemental/supplemental", "Supplemental/synthetic_generation", "intro"], "filenames": ["API_References/api_references.md", "API_References/custom_pywr.md", "API_References/drb_make_model.md", "API_References/drb_run_all.md", "API_References/drb_run_sim.md", "API_References/prep_input_data.md", "Getting_Started/Interpret_Results/interpret_results.md", "Getting_Started/Interpret_Results/model_outputs.md", "Getting_Started/Interpret_Results/output_figures.md", "Getting_Started/Running_Simulations/run_all_simulations.md", "Getting_Started/Running_Simulations/run_historic_simulation.md", "Getting_Started/Running_Simulations/running_simulations.md", "Getting_Started/getting_started.md", "Getting_Started/setup_model.md", "Overview/DRB/drb_history.md", "Overview/DRB/drb_hydrology.md", "Overview/DRB/drb_overview.md", "Overview/DRB/drb_planning_management.md", "Overview/Model/pywr_drb_overview.md", "Overview/overview.md", "Supplemental/data_summary.md", "Supplemental/pub.md", "Supplemental/supplemental.md", "Supplemental/synthetic_generation.md", "intro.md"], "titles": ["API References", "<code class=\"docutils literal notranslate\"><span class=\"pre\">custom_pywr.py</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">drb_make_model.py</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">drb_run_all.sh</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">drb_run_sim.py</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">prep_input_data.py</span></code>", "Interpret Results", "Model Outputs", "Output Figures", "Run all model simulations", "Run Historic Simulations", "Running Simulations in Pywr-DRB", "Getting Started", "Setup Model", "DRB History", "Hydrology of the Delaware River Basin", "Overview of the Delaware River Basin (DRB)", "DRB Planning &amp; Management", "Pywr-DRB Model Overview", "Pywr-DRB Overview", "Summary of data", "Prediction in ungauged basins", "Supplemental Material", "Synthetic streamflow generation", "Pywr-DRB"], "terms": {"prep_input_data": [0, 3, 13, 24], "py": [0, 3, 9, 13, 24], "drb_make_model": [0, 4, 13, 24], "drb_run_sim": [0, 3, 9, 13, 24], "drb_run_al": [0, 9, 13, 24], "sh": [0, 9, 13, 24], "custom_pywr": [0, 24], "thi": [1, 2, 3, 5, 9, 13, 14, 15, 17, 21, 23, 24], "code": [1, 4, 21], "defin": [1, 2, 5, 13], "class": 1, "call": [1, 2, 9, 21], "ffmpnycrunningavgparamet": 1, "which": [1, 2, 13, 14, 15, 17, 21, 23], "us": [1, 2, 3, 4, 5, 9, 13, 14, 15, 18, 20, 21, 23], "implement": [1, 21], "flexibl": [1, 14, 17, 23], "flow": [1, 5, 13, 14, 15, 17], "manag": [1, 15, 16, 18, 19, 24], "program": [1, 14, 17], "within": [1, 7, 9, 13, 17, 18, 20, 24], "pywr": [1, 2, 3, 4, 5, 9, 20, 21], "drb": [1, 3, 4, 5, 9, 15, 20, 21, 23], "model": [1, 4, 5, 6, 12, 14, 19, 21, 24], "The": [1, 2, 4, 5, 9, 13, 15, 17, 18, 20, 21, 23, 24], "__init__": 1, "method": [1, 4, 23], "take": [1, 2, 5, 17, 21], "sever": [1, 9, 13, 14, 15, 17, 23], "argument": [1, 2, 4, 9], "an": [1, 2, 4, 18, 21, 23, 24], "instanc": 1, "node": [1, 2, 5, 13], "object": 1, "max_avg_deliveri": 1, "paramet": [1, 2, 4, 23], "repres": [1, 2, 17], "maximum": 1, "averag": 1, "deliveri": [1, 2, 18], "In": [1, 14], "setup": [1, 12, 24], "empti": 1, "arrai": [1, 15], "creat": [1, 2, 23], "hold": [1, 2], "state": [1, 2, 14, 15, 17, 20, 24], "size": 1, "number": [1, 23], "scenario": [1, 23], "reset": 1, "set": [1, 4, 21, 23], "initi": [1, 2, 15], "valu": [1, 2, 5, 23], "calcul": [1, 2], "timestep": [1, 18, 23], "datetim": 1, "max_deliveri": 1, "multipli": 1, "return": [1, 2, 5], "current": 1, "volum": [1, 2, 18], "remain": 1, "after": [1, 13], "updat": [1, 2, 9], "base": [1, 2, 5, 9, 14, 17, 21], "If": [1, 2, 5], "date": [1, 2, 5], "mai": [1, 9], "31st": 1, "run": [1, 3, 4, 12, 13, 20, 24], "formula": [1, 17], "maxdel_t": 1, "maxdel_": 1, "t": [1, 23], "1": [1, 13, 21, 23], "flow_": 1, "max_avg_del": 1, "also": [1, 2, 14, 15, 23], "ensur": [1, 15, 17], "cannot": 1, "less": 1, "than": [1, 14], "zero": 1, "next": [1, 2, 21], "dai": [1, 5, 15], "load": [1, 4], "data": [1, 2, 3, 4, 5, 9, 13, 21, 22, 24], "pass": [1, 13, 14], "add": [2, 3], "major": [2, 17], "type": [2, 3, 9, 13], "includ": [2, 5, 13, 14, 15, 17, 18, 20, 23], "reservoir": [2, 5, 14, 17, 18, 21], "river": [2, 17, 18, 19, 24], "function": [2, 4, 5, 9, 13], "all": [2, 3, 11, 12, 13, 15, 24], "standard": [2, 23], "minor": 2, "belong": 2, "each": [2, 5, 13, 17, 21, 23], "i": [2, 21, 23], "e": [2, 15], "catchment": [2, 5, 18, 20, 21], "withdraw": 2, "consumpt": 2, "outflow": 2, "along": [2, 8], "edg": [2, 13], "ar": [2, 4, 5, 9, 13, 15, 17, 20, 21, 23], "ad": [2, 4, 21], "dict": 2, "element": 2, "written": [2, 5], "json": [2, 4, 13], "file": [2, 4, 5, 9, 13], "complet": [2, 9], "str": 2, "either": 2, "nhmv10": [2, 3, 9], "etc": 2, "onli": [2, 23], "activ": 2, "weap": [2, 9, 13, 20], "seri": 2, "backup": [2, 4], "fill": 2, "inflow": [2, 3, 4, 5, 9, 13, 21], "non": [2, 21], "what": 2, "ani": 2, "starfit": 2, "regulatori": [2, 14, 17], "directli": 2, "downstream": [2, 5, 15, 17], "write": 2, "network": [2, 21], "float": 2, "start": [2, 5, 23, 24], "mg": 2, "must": [2, 23], "correspond": [2, 21], "time": [2, 3, 4, 23], "total": 2, "doesnt": 2, "automat": 2, "step": [2, 21], "0": [2, 13], "fraction": [2, 23], "full": 2, "note": 2, "percent": 2, "confus": 2, "convent": 2, "bool": 2, "fals": 2, "cost": [2, 17], "fix": 2, "throughout": [2, 14, 15, 18, 20], "simul": [2, 3, 4, 12, 13, 18, 20, 21, 23, 24], "vari": [2, 15], "accord": 2, "depend": [2, 15], "end": [2, 5, 23], "boolean": [2, 5], "indic": [2, 23], "whether": [2, 5], "histor": [2, 9, 11, 12, 18, 20, 21, 23, 24], "nyc": [2, 18], "nj": [2, 18], "default": 2, "two": [2, 23], "d": 2, "dictionari": [2, 5], "r": [2, 13, 21, 23], "string": [2, 5], "gener": [2, 4, 13, 14, 15, 17, 20, 22, 24], "store": [2, 7, 9, 13, 15], "relev": 2, "associ": 2, "behavior": 2, "rule": 2, "input": [2, 3, 4, 5, 9, 13, 18, 20, 21], "first": [2, 5, 21, 23], "variabl": [2, 4, 21, 23], "starfit_remove_rmax": 2, "starfit_linear_below_nor": 2, "Then": [2, 5, 21, 23], "proce": 2, "variou": [2, 14], "constant": 2, "ha": [2, 9, 14, 17, 21, 23], "uniqu": 2, "kei": [2, 17, 21], "list": [2, 5, 13], "aggreg": [2, 21], "sum": [2, 21], "max": 2, "product": 2, "appli": [2, 21], "other": [2, 5, 14, 15, 21], "These": [2, 4, 15, 20], "have": [2, 5, 9, 14, 15, 20], "condition": 2, "addit": [2, 5, 9, 14], "belownor_fin": 2, "release_min_fin": 2, "neg_norhi_final_unnorm": 2, "norhi_fin": 2, "final": [2, 4, 21, 23], "shell": 3, "script": [3, 13], "execut": [3, 4], "avail": [3, 4, 9, 13, 21, 23, 24], "make": [3, 14, 18, 24], "figur": [3, 13, 14, 15], "For": [3, 4, 5, 9, 20], "more": [3, 4, 14, 20, 21], "inform": [3, 7], "differ": [3, 9, 13, 14], "see": [3, 4, 9, 20], "summari": [3, 9, 22, 24], "page": [3, 9, 23], "todo": 3, "link": [3, 4], "prep": [3, 5], "from": [3, 4, 5, 9, 13, 14, 15, 17, 20, 21, 23, 24], "raw": 3, "echo": 3, "python3": [3, 9], "w": [3, 21], "ignor": [3, 9], "multipl": 3, "inpu": 3, "sourc": [3, 4, 13, 14, 15], "inflow_typ": [3, 4, 9], "obs_pub": [3, 9], "nwmv21": [3, 9], "nwmv21_withlak": [3, 9], "weap_23aug2022_gridmet": [3, 9], "do": 3, "backup_inflow_typ": [3, 4, 9], "done": [3, 24], "analyz": 3, "result": [3, 4, 5, 9, 12, 13, 24], "drb_make_fig": [3, 9, 13], "process": [4, 23], "command": [4, 9, 13], "line": [4, 9, 14], "specifi": [4, 5, 13], "informaiton": 4, "start_dat": 4, "end_dat": 4, "rang": [4, 15, 23], "model_filenam": 4, "output_filenam": 4, "name": [4, 5], "locat": [4, 5, 15, 18, 20, 21], "output": [4, 5, 6, 9, 12, 18, 21, 24], "import": [4, 17], "some": [4, 21], "custom": 4, "A": [4, 17, 20, 23, 24], "tablesrecord": 4, "record": [4, 20, 21, 23], "statist": [4, 21, 23], "convert": [4, 5, 21, 23], "panda": [4, 5], "datafram": [4, 5], "read": 5, "streamflow": [5, 9, 13, 18, 20, 22, 24], "nhm": [5, 9, 20], "nwm": [5, 9, 20], "estim": [5, 14, 21], "contain": [5, 9, 13, 15], "delimit": 5, "separ": 5, "label": 5, "identifi": [5, 21], "column": 5, "site": [5, 21, 23], "filter": 5, "It": [5, 21], "restructur": 5, "gage": [5, 21], "cubic": 5, "meter": 5, "per": [5, 15, 23], "second": 5, "cm": 5, "million": [5, 14, 15], "gallon": [5, 15], "mgd": 5, "python": [5, 18], "match": 5, "usg": [5, 15, 20, 21, 24], "handl": 5, "case": 5, "where": [5, 21, 23], "df": 5, "dataset_label": 5, "use_pub": 5, "determin": [5, 21], "whose": 5, "true": 5, "site_matches_reservoir": 5, "site_matches_link": 5, "mainstem": [5, 18, 20], "upstream": [5, 18, 20], "subtract": 5, "so": [5, 23], "assum": [5, 21], "come": 5, "save": [5, 13], "csv": 5, "visual": [6, 9, 12, 24], "descript": [7, 8, 9], "drb_output": [7, 9], "hdf5": [7, 9], "show": 8, "latest": [8, 9, 21], "option": 9, "exampl": [9, 14], "cd": 9, "directori": [9, 13], "you": [9, 13], "receiv": [9, 20], "warn": 9, "could": 9, "while": [9, 23], "until": 9, "its": [9, 14, 15], "troubleshoot": 9, "onc": [9, 13], "To": [9, 13, 21], "reconstruct": [9, 20], "follow": [9, 13, 18, 23], "bash": [9, 13], "output_data": 9, "folder": [9, 20, 21], "plot": [9, 13], "modul": [9, 13], "produc": [9, 23], "can": [9, 13, 15, 21, 23], "been": [9, 14, 20, 21, 23], "interpret": [12, 24], "begin": 13, "copi": 13, "download": 13, "project": [13, 20, 24], "repositori": [13, 20, 21], "github": [13, 21], "here": [13, 21], "clone": 13, "your": 13, "local": 13, "machin": [13, 21], "git": 13, "http": 13, "com": 13, "drb_water_manag": 13, "requir": [13, 21], "txt": 13, "glob2": 13, "h5py": 13, "hydroev": 13, "instal": 13, "necessari": 13, "m": [13, 21, 23], "pip": 13, "your_local_directori": 13, "prepar": 13, "potenti": 13, "readi": 13, "format": [13, 14], "observ": [13, 20, 21, 23], "nhmv1": 13, "nwmv2": 13, "aug": 13, "23": 13, "2022": 13, "version": [13, 21], "featur": 13, "model_data": 13, "construct": [13, 18, 23], "perform": [13, 21, 23], "being": [13, 15], "fig": 13, "three": [13, 15], "abov": 13, "sequenc": [13, 21], "addition": [13, 23], "vital": 14, "eastern": 14, "unit": [14, 20, 24], "provid": [14, 17, 23], "peopl": [14, 15], "support": [14, 15, 24], "divers": 14, "industri": [14, 15, 17], "sustain": 14, "critic": [14, 15, 17], "ecosystem": 14, "over": [14, 15], "cours": 14, "undergon": 14, "signific": [14, 15], "chang": [14, 15], "land": [14, 17], "environment": [14, 17], "inhabit": 14, "indigen": 14, "thousand": 14, "year": [14, 23], "who": 14, "reli": [14, 23], "rich": 14, "food": 14, "transport": 14, "european": 14, "colon": 14, "arriv": 14, "17th": 14, "centuri": 14, "bring": 14, "new": [14, 17], "agricultur": [14, 15, 17], "practic": 14, "transform": [14, 21, 23], "landscap": 14, "alter": 14, "20th": 14, "becam": 14, "increasingli": 14, "urban": [14, 15], "popul": 14, "lead": 14, "grow": [14, 15], "demand": 14, "respons": [14, 17], "action": 14, "were": [14, 21], "taken": [14, 21], "commiss": [14, 17], "1961": [14, 17], "interst": 14, "agenc": [14, 17], "s": [14, 15, 21, 23], "qualiti": [14, 15, 17], "quantiti": [14, 17], "alloc": [14, 17, 18], "serv": 14, "2016": [14, 21], "now": 14, "basic": 14, "drbc": [14, 15, 17], "fy": 14, "2023": 14, "2025": 14, "report": [14, 21], "shape": 14, "1965": 14, "feder": [14, 17], "pollut": [14, 15], "control": [14, 15], "act": 14, "wa": [14, 17, 18], "establish": [14, 17], "countri": 14, "passag": 14, "clean": 14, "1972": 14, "further": 14, "strengthen": 14, "improv": 14, "flood": [14, 15, 20], "natur": 14, "disast": 14, "influenc": 14, "1960": 14, "experienc": 14, "highlight": 14, "need": [14, 20], "coordin": 14, "across": [14, 18, 20], "led": 14, "decreas": 14, "level": [14, 15, 18], "threaten": [14, 15], "suppli": [14, 15, 17, 18], "region": 14, "crisi": 14, "form": 14, "consist": [14, 21, 23], "york": [14, 17], "jersei": 14, "pennsylvania": 14, "citi": [14, 17], "manner": 14, "mark": 14, "shift": 14, "rather": 14, "basi": 14, "framework": [14, 17, 21, 23], "decis": [14, 18, 24], "integr": [14, 15, 18, 24], "approach": 14, "stakehold": 14, "work": [14, 24], "togeth": 14, "address": 14, "issu": [14, 15], "health": [14, 15], "One": 14, "notabl": 14, "ffmp": [14, 17], "2006": 14, "voluntari": 14, "allow": [14, 17, 18, 23], "adjust": [14, 23], "releas": [14, 15, 17, 18], "condit": [14, 15, 18, 23], "help": [14, 15], "balanc": 14, "hydroelectr": 14, "power": [14, 15, 17], "recreat": [14, 15], "scienc": 14, "how": 14, "we": [14, 21, 23], "monitor": [14, 17], "stream": [14, 17, 21], "temperatur": 14, "complex": 15, "system": [15, 20, 23], "span": 15, "four": [15, 20, 21], "understand": 15, "essenti": 15, "effect": 15, "protect": [15, 17], "character": 15, "humid": 15, "subtrop": 15, "warm": 15, "summer": 15, "cool": 15, "winter": 15, "face": 15, "numer": 15, "habitat": [15, 17], "loss": 15, "runoff": 15, "discharg": 15, "wastewat": 15, "treatment": 15, "plant": 15, "contribut": 15, "wetland": 15, "forest": 15, "particularli": 15, "vulner": 15, "develop": [15, 20], "fragment": 15, "concern": 15, "precipit": 15, "pattern": 15, "increas": 15, "frequenc": 15, "extrem": [15, 23], "weather": 15, "event": [15, 23], "impact": [15, 17], "wide": [15, 23], "aquat": [15, 17], "anim": 15, "speci": 15, "mani": [15, 21], "endang": 15, "maintain": [15, 17, 23], "ecolog": 15, "valuabl": 15, "resourc": [15, 17, 18, 21, 24], "rel": 15, "sea": 15, "trend": 15, "philadelphia": 15, "pa": 15, "noaa": [15, 20], "subject": 15, "largest": 15, "divert": 15, "those": 15, "purpos": 15, "home": 15, "larg": [15, 23], "plai": [15, 17], "role": [15, 17], "primarili": 15, "thei": [15, 17], "nycdep": [15, 17], "own": 15, "oper": [15, 18], "cannonsvil": 15, "pepacton": 15, "neversink": 15, "upper": 15, "combin": [15, 20, 21, 23], "storag": [15, 18], "capac": 15, "570": 15, "billion": 15, "convei": 15, "through": [15, 21], "aqueduct": 15, "longest": 15, "tunnel": 15, "world": 15, "85": 15, "mile": 15, "deliv": 15, "up": [15, 23], "600": 15, "beltzvil": 15, "blue": 15, "marsh": 15, "franci": 15, "walter": 15, "municip": [15, 17], "well": [15, 21], "u": [15, 23], "armi": 15, "corp": 15, "engin": 15, "round": 15, "vallei": 15, "lake": 15, "wallenpaupack": 15, "mitig": 15, "dure": [15, 17], "period": [15, 17], "high": 15, "primari": [15, 17], "typic": 15, "adequ": 15, "drought": [15, 17, 23], "gradual": 15, "low": 15, "concentr": 15, "reflect": 15, "fact": 15, "entir": 15, "wet": 15, "dry": 15, "reliabl": 15, "user": [15, 17], "histori": [16, 19, 24], "hydrolog": [16, 19, 20, 24], "plan": [16, 19, 20, 24], "water": [17, 18, 20, 21, 24], "delawar": [17, 18, 19, 24], "basin": [17, 18, 19, 20, 22, 24], "compact": 17, "sign": 17, "cooper": 17, "among": 17, "account": 17, "varieti": 17, "factor": [17, 23], "temporari": 17, "certain": 17, "charg": 17, "design": [17, 20, 24], "fairli": 17, "distribut": [17, 18], "watersh": 17, "administ": 17, "drink": 17, "measur": 17, "conserv": 17, "restor": 17, "involv": 17, "bodi": 17, "compos": 17, "govern": [17, 18], "manufactur": 17, "group": 17, "advoc": 17, "preserv": [17, 23], "assist": [18, 24], "build": 18, "opensourc": 18, "packag": 18, "accur": 18, "polici": [18, 23], "futur": 18, "reciev": 18, "timeseri": [18, 20, 23], "18": [18, 20], "3": [18, 20], "daili": [18, 21], "represent": [18, 24], "regul": 18, "altern": 20, "gaug": 20, "station": 20, "predict": [20, 22, 24], "ungaug": [20, 22, 24], "detail": [20, 21, 23], "supplement": [20, 24], "nation": 20, "forecast": 20, "ocean": 20, "atmospher": 20, "administr": 20, "movement": 20, "geolog": [20, 24], "survei": [20, 24], "evalu": 20, "gather": 20, "compar": 20, "input_data": [20, 21], "howev": 21, "lack": 21, "overcom": 21, "explor": [21, 23], "learn": 21, "present": [21, 23], "modeled_gag": 21, "trevor": 21, "amestoi": 21, "streamflow_pub": 21, "fdc": 21, "multi": 21, "nn": 21, "train": 21, "geophys": 21, "hydroclimat": 21, "invers": 21, "weight": 21, "k": 21, "nearest": 21, "describ": [21, 23], "worland": 21, "et": [21, 23], "al": [21, 23], "2019": 21, "2020": 21, "2": [21, 23], "respect": 21, "later": 21, "fennessei": 21, "1994": 21, "introduc": 21, "commonli": 21, "encourag": 21, "length": 21, "public": [21, 23], "mean": 21, "ungag": 21, "target": 21, "interest": 21, "hat": [21, 23], "_": 21, "pred": 21, "donor": 21, "point": 21, "transfer": 21, "nonexceed": 21, "probabl": 21, "mathbf": 21, "p": 21, "map": 21, "donat": 21, "back": [21, 23], "limit": 21, "scope": 21, "tutori": 21, "let": 21, "alreadi": 21, "studi": 21, "formal": 21, "given": [21, 23], "q_i": 21, "neighbor": 21, "q_": [21, 23], "ob": 21, "q_1": 21, "q_2": 21, "q_k": 21, "With": 21, "fdc_": 21, "fdc_1": 21, "fdc_2": 21, "fdc_k": 21, "exceed": 21, "p_": [21, 23], "fdc_i": 21, "p_i": 21, "most": 21, "common": 21, "squar": 21, "distanc": 21, "w_i": 21, "d_i": 21, "_1": 21, "_k": 21, "look": 21, "formul": 21, "place": 21, "hope": 21, "clear": 21, "why": 21, "rightfulli": 21, "summar": 21, "topic": 21, "graphic": [21, 24], "c": [21, 23], "steinschneid": 21, "asquith": 21, "knight": 21, "wieczorek": 21, "infer": 21, "multioutput": 21, "research": 21, "55": 21, "8": 21, "6850": 21, "6868": 21, "farmer": 21, "copula": 21, "theori": 21, "partial": 21, "11": 21, "9378": 21, "9397": 21, "synthet": [22, 24], "motiv": 23, "exploratori": 23, "bottom": 23, "assess": [23, 24], "upon": 23, "sampl": 23, "plausibl": 23, "subsequ": 23, "identif": 23, "consequenti": 23, "singl": 23, "via": 23, "enough": 23, "approxim": 23, "properti": 23, "shown": [23, 24], "captur": 23, "degre": 23, "intern": 23, "inher": 23, "compon": 23, "bootstrap": 23, "techniqu": 23, "choleski": 23, "decomposit": 23, "autocorrel": 23, "matrix": 23, "cross": 23, "correl": 23, "inter": 23, "tempor": 23, "part": 23, "2010": 23, "known": 23, "modifi": 23, "gaussian": 23, "nois": 23, "wai": 23, "impos": 23, "2013": 23, "q_h": 23, "mathcal": 23, "n_h": 23, "n_": 23, "arbitrari": 23, "spatial": 23, "z_": 23, "h_": 23, "j": 23, "frac": 23, "y_": 23, "mu": 23, "_j": 23, "sigma": 23, "replac": 23, "z_h": 23, "m_": 23, "week": 23, "thu": 23, "uncorrel": 23, "c_": 23, "resampl": 23, "between": 23, "specif": 23, "p_h": 23, "text": 23, "corr": 23, "triangular": 23, "matric": 23, "tu": 23, "normal": 23, "z": 23, "cu": 23, "real": 23, "space": 23, "s_": 23, "exp": 23, "repeat": 23, "27": 23, "26": 23, "52": 23, "greater": 23, "below": 24, "overview": 24, "get": 24, "api": 24, "refer": 24, "materi": 24, "partnership": 24, "goal": 24, "interag": 24, "collabor": 24, "effort": 24, "contributor": 24, "cornel": 24, "univers": 24, "ncar": 24, "pnnl": 24, "lbnl": 24}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"api": 0, "refer": [0, 21], "custom_pywr": 1, "py": [1, 2, 4, 5], "drb_make_model": 2, "add_major_nod": 2, "model": [2, 7, 9, 13, 18, 20], "name": 2, "node_typ": 2, "inflow_typ": 2, "backup_inflow_typ": 2, "none": 2, "outflow_typ": 2, "downstream_nod": 2, "initial_volum": 2, "initial_volume_perc": 2, "variable_cost": 2, "start_dat": [2, 5], "end_dat": [2, 5], "use_hist_nycnjdeliveri": 2, "true": 2, "create_starfit_param": 2, "drb_run_al": 3, "sh": 3, "drb_run_sim": 4, "prep_input_data": 5, "read_modeled_estim": 5, "filenam": 5, "sep": 5, "date_label": 5, "site_label": 5, "streamflow_label": 5, "match_gag": 5, "interpret": 6, "result": 6, "output": [7, 8], "figur": [8, 9], "radial": 8, "perform": 8, "metric": 8, "plot": 8, "compar": 8, "simul": [8, 9, 10, 11], "vs": 8, "observ": 8, "flow": [8, 21, 23], "target": 8, "locat": 8, "montagu": 8, "trenton": 8, "decis": 8, "relev": 8, "run": [9, 10, 11], "all": 9, "execut": [9, 13], "gener": [9, 21, 23], "histor": 10, "pywr": [11, 13, 18, 19, 24], "drb": [11, 13, 14, 16, 17, 18, 19, 24], "get": 12, "start": 12, "setup": 13, "access": 13, "depend": 13, "histori": 14, "earli": 14, "water": [14, 15], "manag": [14, 17], "plan": [14, 17], "regul": [14, 17], "kei": 14, "event": 14, "The": 14, "1963": 14, "1964": 14, "drought": 14, "delawar": [14, 15, 16], "river": [14, 15, 16], "basin": [14, 15, 16, 21], "compact": 14, "impact": 14, "resourc": [14, 23], "hydrolog": 15, "climat": 15, "region": 15, "environment": 15, "challeng": 15, "sensit": 15, "ecosystem": 15, "salin": 15, "intrus": 15, "major": 15, "out": 15, "divers": 15, "reservoir": 15, "provid": 15, "new": 15, "york": 15, "citi": 15, "non": 15, "nyc": 15, "distribut": 15, "overview": [16, 18, 19, 23], "polici": 17, "stakehold": 17, "goal": [18, 23], "design": 18, "repres": 18, "compon": 18, "summari": [20, 21], "data": 20, "requir": 20, "sourc": 20, "avail": 20, "predict": 21, "ungaug": 21, "method": 21, "neural": 21, "net": 21, "durat": 21, "curv": 21, "qppq": 21, "streamflow": [21, 23], "timeseri": 21, "supplement": 22, "materi": 22, "synthet": 23, "ensembl": 23, "kirsch": 23, "nowak": 23, "monthli": 23, "disaggreg": 23, "daili": 23, "content": 24, "acknowledg": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})