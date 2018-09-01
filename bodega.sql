-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-09-2018 a las 20:31:32
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bodega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id` int(11) NOT NULL,
  `referencia` varchar(50) COLLATE utf8_bin NOT NULL,
  `tamano` varchar(10) COLLATE utf8_bin NOT NULL,
  `factura` varchar(50) COLLATE utf8_bin NOT NULL,
  `vendido` varchar(50) COLLATE utf8_bin NOT NULL,
  `unidades` varchar(50) COLLATE utf8_bin NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id`, `referencia`, `tamano`, `factura`, `vendido`, `unidades`, `fecha`) VALUES
(1, '1', '1', '1', 'david', '5', '0000-00-00'),
(2, '1', '1', '1', 'david', '5', '0000-00-00'),
(3, '1', '1', '1', 'david', '5', '0000-00-00'),
(4, '1', '1', '2', 'ASDF', '5', '0000-00-00'),
(5, '1', '1', '2q34123', 'aaaaa', '4', '0000-00-00'),
(6, '1', '1', 'asdfasdfads', 'aaaa', '5', '0000-00-00'),
(7, '1', '1', '12312312321', 'juan', '5', '0000-00-00'),
(8, '1', '1', '99990', 'paco', '45', '2018-09-11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
