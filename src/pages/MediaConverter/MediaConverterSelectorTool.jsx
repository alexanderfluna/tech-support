import React, { useState, useEffect } from 'react';

const EthernetSwitchSelectorTool = () => {
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    MultiRate: ['no', 'yes'], 
    DataRate: ['FE', 'GE'], 
    PoE: ['no', 'PoE', 'PoEHo'], 
    Fiber: ['mm', 'sm'],
    NumofFibers: ['1', '2'],
    Optics: ['LC', 'SC', 'ST'],
    Tx: ['850', '1310', '1550'],
    SingleDualQuad: ['single', 'dual', 'quad'], 
    Package: ['ComFit', 'compact', 'DTF', 'standalone'],
    OperatingPower: ['12 to 24 VDC', '24 VAC', '48 to 56 VDC', '8 to 15 VDC', '8 to 24 VDC', '8 to 24 VDC, 24 VAC', '9 tp 24 VDC, 24 VAC']
  });

  const [filters, setFilters] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products);
    updateAvailableOptions(products);
  }, []);

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({});
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(
        ([key, filterValue]) => !filterValue || product[key] === filterValue
      )
    );
    setFilteredProducts(newFilteredProducts);
    updateAvailableOptions(newFilteredProducts);
  };

  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({ MultiRate: null,
      DataRate: null,
      PoE: null,
      Fiber: null,
      NumofFibers: null,
      Optics: null,
      Tx: null,
      SingleDualQuad: null, 
      Package: null,
      OperatingPower: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const getUniqueOrderedValues = (arr) => [...new Set(arr)];
    const newOptions = {
      MultiRate: getUniqueOrderedValues(filteredProducts.map((product) => product.MultiRate)),
      DataRate: getUniqueOrderedValues(filteredProducts.map((product) => product.DataRate)),
      PoE: getUniqueOrderedValues(filteredProducts.map((product) => product.PoE)),
      Fiber: getUniqueOrderedValues(filteredProducts.map((product) => product.Fiber)),
      NumofFibers: getUniqueOrderedValues(filteredProducts.map((product) => product.NumofFibers)),
      Optics: getUniqueOrderedValues(filteredProducts.map((product) => product.Optics)),
      Tx: getUniqueOrderedValues(filteredProducts.map((product) => product.Tx)),
      SingleDualQuad: getUniqueOrderedValues(filteredProducts.map((product) => product.SingleDualQuad)),
      Package: getUniqueOrderedValues(filteredProducts.map((product) => product.Package)),
      OperatingPower: getUniqueOrderedValues(filteredProducts.map((product) => product.OperatingPower))
    };
    setAvailableOptions(newOptions);
  };
  
    const products = [
        { Model: "CNFE1002APoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002APoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002APoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002APoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002BPoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002BPoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002BPoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002BPoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1002M1A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1002M1B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1002MAC1A-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1002MAC1B-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1002S1A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1002S1B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1002SAC1A-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1002SAC1B-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1003M2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1003MAC2-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1003PoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1003PoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1003PoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1003PoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1003S2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1003SAC2-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1004APoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004APoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004APoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004APoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004BPoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004BPoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004BPoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004BPoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1004M1A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1004M1B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1004MAC1A-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1004MAC1B-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1004S1A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1004S1B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1004SAC1A-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1004SAC1B-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1005M2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1005MAC2-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1005PoEM/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1005PoEMHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1005PoES/m", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1005PoESHO/m", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFE1005S2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 24 VDC" },
        { Model: "CNFE1005SAC2-m", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "compact", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M1A/2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M1A/4", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M1B/2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M1B/4", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M2/3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1M2/5", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S1A/2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S1A/4", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S1B/2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "ST", Tx: "1550", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S1B/4", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S2/3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "SC", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE1S2/5", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "ST", Tx: "1310", Package: "DTF", OperatingPower: "8 to 24 VDC, 24 VAC" },
        { Model: "CNFE22MC + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE22MC + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MC/m + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNFE2MCAC/m + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCAC/m + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "24 VAC" },
        { Model: "CNFE2MCPoE + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoE + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFE2MCPoEm + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "12 to 24 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE30/m + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-10A", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-10B", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-2", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-26A", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-26B", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-3", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC"},
        { Model: "CNFESFPMCPoE60/m + SFP-36A", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNFESFPMCPoE60/m + SFP-36B", MultiRate: "no", DataRate: "FE", PoE: "PoEHo", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE22MC + SFP-12A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-12B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-14A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-14B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-46", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-48A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-48B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-6", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE22MC + SFP-SX", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "standalone", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-12A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-12B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-14A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-14B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-46", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-48A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-48B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-6", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC + SFP-SX", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "ComFit", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-12A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-12B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-14A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-14B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-46", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-48A", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-48B", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-6", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MC-m + SFP-SX", MultiRate: "no", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "compact", OperatingPower: "8 to 15 VDC" },
        { Model: "CNGE2MCPoEm + SFP-12A", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-12B", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-14A", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-14B", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-46", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-48A", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-48B", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-6", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNGE2MCPoEm + SFP-SX", MultiRate: "no", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFP + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFP + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC2SFPPoE + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC2SFPPoE + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "dual", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMC4SFP + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMC4SFP + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "quad", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "ComFit", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFP/m + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "no", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "compact", OperatingPower: "9 to 24 VDC, 24 VAC" },
        { Model: "CNMCSFPPoE + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "standalone", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-10A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-10B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-12A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-12B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-14A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-14B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-2", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-26A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-26B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-3", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-36A", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-36B", MultiRate: "yes", DataRate: "FE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 1, Optics: "SC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-46", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-48A", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-48B", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 1, Optics: "LC", Tx: "1550", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-6", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "sm", NumofFibers: 2, Optics: "LC", Tx: "1310", Package: "compact", OperatingPower: "48 to 56 VDC" },
        { Model: "CNMCSFPPoE/m + SFP-SX", MultiRate: "yes", DataRate: "GE", PoE: "PoE", SingleDualQuad: "single", Fiber: "mm", NumofFibers: 2, Optics: "LC", Tx: "850", Package: "compact", OperatingPower: "48 to 56 VDC" }
      ];

  return (
    <div>
        <button className="purple-button" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
              {Object.entries(availableOptions).map(([filterType, options]) => (
                <div key={filterType} className="filter-section">
                  <h3 className="filter-header">
                    {filterType}
                    {filters[filterType] && (
                      <button className="clear-filter" onClick={() => clearFilter(filterType)}>
                        X
                      </button>
                    )}
                  </h3>
                  <div className="radio-group">
                    {options.map((option) => (
                      <label key={option} className="radio-label">
                        <input
                          type="radio"
                          name={filterType}
                          value={option}
                          checked={filters[filterType] === option}
                          onChange={() => handleFilterChange(filterType, option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="table-container">
              <table className="selector-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    {Object.keys(availableOptions).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.Model}</td>
                      {Object.keys(availableOptions).map((key) => (
                        <td key={key}>{product[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
    </div>
  );
};

export default EthernetSwitchSelectorTool;
