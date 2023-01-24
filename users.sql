-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 12:58 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `click-fit`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'user',
  `active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `email`, `password`, `type`, `active`) VALUES
(2, 'superadmin@example.com', '123456', 'user', 1),
(3, 'M144037980@df', 'dfgt', 'user', 1),
(4, 'mehdimetalhead@icloud.com', 'fgf', 'user', 1),
(5, 'mehdimetalhead@icloud.com', 'fgfwsdf', 'user', 1),
(6, 'mehdimetalhead@icloud.com', 'fgfwsdf', 'user', 1),
(7, 'mehdimetalhead@icloud.com', 'fgfwsdf', 'user', 1),
(8, 'dev@mdcallcenter.fr', 'SAID', 'user', 1),
(9, 'dev@mdcallcenter.fr', 'SAID', 'user', 1),
(10, 'dev@mdcallcenter.fr', 'SAID', 'user', 1),
(11, 'dev@mdcallcenter.fr', 'SAID', 'user', 1),
(12, 'dev@sdfs.fr', '8765432', 'user', 1),
(13, 'dev@mdcalsdcsdlcenter.fr', 'sdfds', 'user', 1),
(14, 'undefined', 'undefined', 'user', 1),
(15, 'undefined', 'undefined', 'user', 1),
(16, 'undefined', 'undefined', 'user', 1),
(17, 'undefined', 'undefined', 'user', 1),
(18, 'dev@mdcallcenter.fr', 'qsdq', 'user', 1),
(19, 'test@gmail.com', '1234', 'user', 1),
(20, 'undefined', 'undefined', 'user', 1),
(21, 'oussama@gmail.com', '123456', 'user', 1),
(22, 'undefined', 'undefined', 'user', 1),
(23, '{}', 'undefined', 'user', 1),
(24, 'undefined', 'undefined', 'user', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
