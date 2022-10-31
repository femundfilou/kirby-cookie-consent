<?php
namespace Fefi\CookieConsent;

class Policy {
  public $id;
  public $label;
  public $description;
  public $category;

  /**
   * Create new cookie consent policy
   *
   * @param string $label Label of policy
   * @param string $description Description of policy
   * @param string $id Unique identifier of policy
   * @param string $category Id of matching category
   */
  public function __construct(string $label, string $description, string $id, string $category)
  {
    $this->label = $label;
    $this->description = $description;
    $this->id = $id;
    $this->category = $category;
  }

  /**
   * Return label
   *
   * @return string
   */
  public function label(): string
  {
    return $this->label;
  }

  /**
   * Return description
   *
   * @return string
   */
  public function description(): string
  {
    return $this->description;
  }

  /**
   * Return id
   *
   * @return string
   */
  public function id(): string
  {
    return $this->id;
  }

  /**
   * Return category
   *
   * @return string
   */
  public function category(): string
  {
    return $this->category;
  }

  public function toJson(): string
  {
    return json_encode($this->toArray());
  }

  public function toArray(): array
  {
    return [
      'id' => $this->id(),
      'label' => $this->label(),
      'description' => $this->description(),
      'category' => $this->category()
    ];
  }
}