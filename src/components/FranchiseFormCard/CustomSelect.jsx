import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectTrigger = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$hasError ? "#e31e24" : props.$isOpen ? "#9d1419" : "#d9d9d9")};
  padding: 0 14px;
  font-size: 14px;
  background: #ffffff;
  color: ${(props) => (props.$hasValue ? "#333333" : "#757575")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #9d1419;
  }

  svg {
    transition: transform 0.2s ease;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    color: #666;
    flex-shrink: 0;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid #eeeeee;
  background: #fafafa;
  gap: 8px;

  svg {
    color: #888;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    font-size: 13px;
    color: #333;
    outline: none;

    &::placeholder {
      color: #999;
    }
  }
`;

const OptionsList = styled.div`
  max-height: 220px;
  overflow-y: auto;
  padding: 6px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const OptionItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  color: ${(props) => (props.$isSelected ? "#9d1419" : "#333333")};
  font-weight: ${(props) => (props.$isSelected ? "600" : "400")};
  background: ${(props) => (props.$isSelected ? "#fcf2f2" : "transparent")};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const EmptyMessage = styled.div`
  padding: 16px;
  font-size: 13px;
  color: #888;
  text-align: center;
`;

const CustomSelect = ({
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select Option",
  searchable = true,
  hasError = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedValue) => {
    onChange({
      target: {
        name,
        value: selectedValue,
      },
    });
    setIsOpen(false);
    setSearchQuery("");
  };

  const filteredOptions = searchQuery.trim()
    ? options.filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  return (
    <SelectContainer ref={containerRef}>
      <SelectTrigger
        type="button"
        $isOpen={isOpen}
        $hasValue={Boolean(value)}
        $hasError={hasError}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{value || placeholder}</span>
        <FiChevronDown size={18} />
      </SelectTrigger>

      {isOpen && (
        <DropdownMenu>
          {searchable && (
            <SearchBox>
              <FiSearch size={16} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </SearchBox>
          )}

          <OptionsList>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <OptionItem
                  key={option}
                  $isSelected={option === value}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </OptionItem>
              ))
            ) : (
              <EmptyMessage>No matching options</EmptyMessage>
            )}
          </OptionsList>
        </DropdownMenu>
      )}
    </SelectContainer>
  );
};

export default CustomSelect;
