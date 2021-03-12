<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LivrablesAttendusRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *      routePrefix="/admin",
 *      attributes={},
 *      normalizationContext={"groups"={"_read"}},
 *      denormalizationContext={"groups"={"_write"}},
 *      collectionOperations={},
 *      itemOperations={}
 * )
 * @ORM\Entity(repositoryClass=LivrablesAttendusRepository::class)
 */
class LivrablesAttendus
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }
}
